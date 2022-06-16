import { NextFunction, Request, Response } from 'express';
import { chatService } from '../services/chat.service';

class ChatController {
  // eslint-disable-next-line class-methods-use-this
  async getChatRooms(req: Request, res: Response, next: NextFunction) {
    const workspace_idx: number = Number(req.params.workspace_idx);

    await chatService.getRooms(
      workspace_idx,
      (err: Error | null, data: any) => {
        if (err) {
          next(err);
        }
        res.status(200).send({
          status: 200,
          message: 'ChatRooms loaded successfully',
          data,
        });
      }
    );
  }

  async createChatRooms(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      throw new Error('요청 바디 없음');
    }
    // console.log('controller1', req.body);
    // const workspace_idx = req.body.workspace_idx;
    await chatService.addChatRoom(req.body, (err: Error | null, data: any) => {
      if (err) {
        next(err);
      }
      res.status(201).send({
        status: 201,
        message: 'ChatRoom created successfully',
        data,
      });
    });
  }
}
const chatController = new ChatController();

// eslint-disable-next-line import/prefer-default-export
export { chatController };