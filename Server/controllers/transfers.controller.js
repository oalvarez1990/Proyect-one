const { Transfer } = require('../models/transfers.model');
const { User } = require('../models/users.model');


const transfer = async (req, res) => {
    try {
    const {amount, senderAccountNumber, receiverAccountNumber} = req.body
        
        //Validate that the receiverAccountNumber exist
        const userReceiver = await User.findOne({ where: { accountNumber : receiverAccountNumber, status: 'available' } });

        if(!userReceiver){
            res.status(404).json({
                status: 'receiver User don´t exist'
            });
        }
        //Validate that senderUser have money
        const userSender = await User.findOne({ where: { accountNumber : senderAccountNumber, status: 'available' } });

        if (userSender.amount < amount ){
            res.status(404).json({
                status: 'sender User don´t have enought money' 
            });
        }
        //Add money to receiver
        const newAmountReceiver = userReceiver.amount = userReceiver.amount + amount
        userReceiver.update({amount: newAmountReceiver})

        // subtract money to sender
        const newAmountSender = userSender.amount = userSender.amount - amount
        userSender.update({amount: newAmountSender})

        //Create registry of transfer
        const transfer = await Transfer.create(
            { 
                amount, 
                senderUserId: senderAccountNumber, 
                receiverUserId: receiverAccountNumber 
            });
        
        
        res.status(201).json({
            status: 'Done!',
            transfer,
        });
    } catch (error) {
        console.log(error);
    }
};

const getTransfers = async (res,req,next) => {
    try{
        const {id} = req.params
        const receivedTransfers = await Transfer.findOne({ where: { senderUserId: id } });
        const sendedTransfers = await Transfer.findOne({ where: { receiverUserId: id } });       

        res.status(201).json({
            transfers,
            receivedTransfers,
            sendedTransfers
        });

    } catch(error){

    }
}

module.exports = {
    transfer,
    getTransfers
};
