const Artifact = require("../models/artifactModel");

// get all artifact data
exports.getAllArtifacts = async (req, res) => {
  const allArtifacts = await Artifact.find({});
  if (!allArtifacts) {
    res.status(400).send({ error: "no artifacts found" });
  } else {
    return res
      .status(200)
      .send({ message: "here are the found artifacts:", allArtifacts });
  }
};

// get artifact data by id
exports.getArtifactId = async (req, res) => {
  try {
    const artifact = await Artifact.findById(req.params.id);
    if (!artifact) {
      return res.status(400).send({ message: "could not find artifact" });
    } else {
      return res
        .status(200)
        .send({ message: "artifact found successfully!", artifact: artifact });
    }
  } catch (error) {
    return res.status(400).send({ error: "an error occured" });
  }
};

// add artifact data
exports.addArtifact = async (req, res, next) => {
  try {
    const savedArtifact = await Artifact.create(req.body);
    return res.status(200).send({
      message: "Artifact added successfully!",
      artifact: savedArtifact,
    });
  } catch (err) {
    return res
      .status(400)
      .send({ error: "Artifact added successfully!", error: err });
  }
};

// update artifact data
exports.updateArtifact = async (req, res) => {
  try {
    const updatedArtifact = await Artifact.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedArtifact) {
      return res.status(400).send({ message: "Could not update Artifact" });
    }
    return res
      .status(200)
      .send({ message: "Artifact updated successfully", updatedArtifact });
  } catch (error) {
    return res
      .status(400)
      .send({ error: "An error has occurred, unable to update artifact" });
  }
};

// delete artifact data
exports.deleteArtifact = async (req, res) => {
  try {
    const deletedArtifact = await Artifact.findByIdAndDelete(req.params.id);
    if (!deletedArtifact) {
      return res
        .status(400)
        .send({ message: "could not delete, seems like a database issue" });
    } else {
      return res
        .status(200)
        .send({ message: "artifact deleted successfully!" });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ error: "an error occured, unable to delete artifacts" });
  }
};

// get all artifact data
exports.searchArtifact = async (req, res) => {
    const foundArtifacts = await Artifact.find({"Category":req.query.category});
    if (!foundArtifacts) {
      res.status(400).send({ error: "no artifacts found" });
    } else {
      return res
        .status(200)
        .send({ message: "here are the found artifacts:", foundArtifacts });
    }
  };