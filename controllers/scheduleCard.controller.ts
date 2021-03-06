import { Request, Response, NextFunction } from 'express';
import * as scheduleCardService from '../services/scheduleCard.service';

//전체 목록 조회
export async function getAllScheduleCards(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const scheduleCards = await scheduleCardService.findAllScheduleCard();
    res.status(200).send({
      status: 200,
      message: '모든 스케줄 조회 성공',
      data: scheduleCards,
    });
  } catch (err) {
    next(err);
  }
}

//채널 id
// 등록
export async function addScheduleCard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const scheduleCard = await scheduleCardService.createScheduleCard(req.body);
    res.status(201).send({
      status: 201,
      message: '스케줄카드 등록 성공',
      data: scheduleCard,
    });
  } catch (err) {
    next(err);
  }
}
