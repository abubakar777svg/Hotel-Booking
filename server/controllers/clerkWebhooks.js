import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(JSON.stringify(req.body), headers);

    // getting data from body;
    const { data, type } = req.body;
    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.username,
      image: data.profile_image_url,
    };

    // switch cases for different events
    switch (type) {
      case "user.created":
        await User.create(userData);
        break;
      case "user.updated":
        await User.updateOne({ _id: userData._id }, { $set: userData });
        break;
      case "user.deleted":
        await User.deleteOne({ _id: userData._id });
        break;
    }

    return res
      .status(200)
      .json({ success: true, message: "Webhook received successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
