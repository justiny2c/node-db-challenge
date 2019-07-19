const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.getProject();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' });
  }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
      const project = await Projects.getProjectById(id);
      res.json(project);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get project' });
    }
});

router.get("/:id/actions", (req, res) => {
    const { id } = req.params

    Projects
    .getActions(id)
    .then(actions => {
        res.json(actions)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post("/", (req,res) => {
    const project = req.body

    Projects
    .addProject(project)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post("/:id/actions", (req,res) => {
    const { id } = req.params
    const action = req.body

    Projects
    .addActionById(id, action)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;