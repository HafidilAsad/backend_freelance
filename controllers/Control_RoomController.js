import Control_Room from "../models/Control_RoomModel.js";
//import Cost from "../models/CostModel.js";

export const getControl_Rooms = async (req, res) => {
  try {
    const response = await Control_Room.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getControl_RoomById = async (req, res) => {
  try {
    const response = await Control_Room.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createControl_Room = async (req, res) => {
  try {
    await Control_Room.create(req.body);
    res.status(201).json({ msg: "Control_Room Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateControl_Room = async (req, res) => {
  try {
    const { id } = req.params;
    const { pv, sv, status } = req.body;

    const controlRoom = await Control_Room.findByPk(id);

    if (!controlRoom) {
      return res.status(404).json({ error: "Control_Room not found" });
    }

    await controlRoom.update({ pv, sv, status });

    res.status(200).json({ msg: "Control_Room updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteControl_Room = async (req, res) => {
  try {
    await Control_Room.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Control_Room Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
