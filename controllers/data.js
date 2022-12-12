const dataModel = require("../model/dataModel")

exports.contractData = async (req, res) => {
    const data = await dataModel.aggregate([
        {
            $project: {
                _id: 1, estimationNumber: 1, "estimationDetails._id": 1, 'estimationDetails.services': 1
            }
        },
        {
            $unwind: {
                path: "$estimationDetails.services"
            }
        },
        {
            $project:
            {
                _id: 1, estimationNumber: 1,
                "estimationDetails._id": 1, "estimationDetails.services._id": 1,
                "estimationDetails.services.title": 1,
                "estimationDetails.services.materials": 1
            }

        },
        {
            $unwind: {
                path: "$estimationDetails.services.materials",
            }
        },
        {
            $project: {
                _id: 1, estimationNumber: 1,
                "estimationDetails._id": 1, "estimationDetails.services._id": 1,
                "estimationDetails.services.title": 1,
                "estimationDetails.services.materials": 1,
            }
        },
        {
            $match: { "$estimationDetails.services.materials.type": "$material" }
        }

    ]
    )
    res.status(200).json({ data: data })

}