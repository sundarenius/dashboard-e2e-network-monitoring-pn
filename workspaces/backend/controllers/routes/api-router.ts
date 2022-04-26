import express from 'express';
import networkData from './network-route';

const apiRouter = express.Router();

apiRouter.use('/network', networkData);

apiRouter.get('/', (req: any, res: any) => {
  res.send({ success: true });
});

export default apiRouter;
