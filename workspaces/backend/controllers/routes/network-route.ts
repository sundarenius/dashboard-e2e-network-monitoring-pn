import express from 'express';
import { networkData } from '../../models/utils/mock-data';

const router = express.Router();

router.get('/', (req: any, res: any) => {
  console.log(req.body);
  const data = networkData();
  res.send(data);
});

router.post('/', (req: any, res: any) => {
  console.log(req.body);
  const data = networkData();
  res.send(data);
});

export default router;
