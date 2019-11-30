const router = require('express').Router();
const Issues = require('../models/issuesModel');

router.route('/').get((req, res) => {
    Issues.find()
        .then(issues => res.json(issues))
        .catch(err => res.status(400).json("Error because: " + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const createdby = req.body.createdby;
    const assigned = req.body.assigned;
    const status = req.body.status;

    const newIssue = new Issues({
        title,
        description,
        createdby,
        assigned,
        status
    });

    newIssue.save()
        .then(() => res.json("Issue created succesfully!"))
        .catch(error => res.json('Error creating new Issue: ' + error));
});

router.route('/:id').get((req, res) => {
    Issues.findById(req.params.id)
        .then(issues => res.json(issues))
        .catch(err => res.status(400).json("Error finding by Id: " + err));
});

router.route('/:id').delete((req, res) => {
    Issues.findByIdAndDelete(req.params.id)
        .then(() => res.json("Issue deleted succesfully!"))
        .catch(error => res.status(400).json("Error deleting by Id: " + error))
});

router.route('/update/:id').put((req, res) => {
    Issues.findByIdAndUpdate(req.params.id)
        .then( issues => {
            issues.title = req.body.title;
            issues.description = req.body.description;
            issues.createdby = req.body.createdby;
            issues.assigned = req.body.assigned;
            issues.status = req.body.status;

            issues.save()
                .then(() => res.json('Issue updated succesfully!'))
                .catch(err => res.status(400).json('Error updating: ' + err));
        })
        .catch(err => res.status(400).json('Error : ' + err));
});

module.exports = router;

