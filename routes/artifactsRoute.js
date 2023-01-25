const router = require("express").Router();
const artifactController = require("../controllers/artifactController");

// body verification skipped due to time constraints

// get all the data
router.get("/artifacts", artifactController.getAllArtifacts);

// get data by id
router.get("/artifacts/:id", artifactController.getArtifactId);

// add data
router.post("/artifacts", artifactController.addArtifact);

// update data by id
router.put("/artifacts/:id", artifactController.updateArtifact);

// delete data by id
router.delete("/artifacts/:id", artifactController.deleteArtifact);

router.get("/artifacts/search/find", artifactController.searchArtifact);

module.exports = router;
