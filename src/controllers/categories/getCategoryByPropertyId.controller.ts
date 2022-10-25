import { Request, Response } from "express";
import getCategoryByPropertyIdService from "../../services/categories/getCategoryByPropertyId.service";

const getCategoryByPropertyIdController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  const categoryByProperty = await getCategoryByPropertyIdService(id);

  return res.json(categoryByProperty);
};
export default getCategoryByPropertyIdController;
