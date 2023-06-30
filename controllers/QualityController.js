import Quality from "../models/QualityModel.js";

export const getQualitys = async (req, res) => {
  try {
    const response = await Quality.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getQualityById = async (req, res) => {
  try {
    const response = await Quality.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createQuality = async (req, res) => {
  try {
    await Quality.create(req.body);
    res.status(201).json({ msg: "Quality Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateQuality = async (req, res) => {
  try {
    await Quality.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Quality Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteQuality = async (req, res) => {
  try {
    await Quality.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Quality Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
