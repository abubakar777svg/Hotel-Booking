export const getUserData = async (req, res) => {
  try {
    const role = req.user.role;
    const recentSearchedCities = req.user.recentSearchedCities;

    return res.status(200).json({ success: true, role, recentSearchedCities });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const storeRecentSearchedCities = async (req, res) => {
  try {
    const { recentSearchedCities } = req.body;
    await User.updateOne(
      { _id: req.user._id },
      { $set: { recentSearchedCities } },
    );
    return res
      .status(200)
      .json({
        success: true,
        message: "Recent searched cities updated successfully",
      });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
