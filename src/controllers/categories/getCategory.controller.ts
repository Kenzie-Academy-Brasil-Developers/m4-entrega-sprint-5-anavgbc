import { Request, Response } from "express";
import getCategoryService from "../../services/categories/getCategory.service";

const getCategoryController = async (req: Request, res: Response) => {
  const allCategories = await getCategoryService();

  return res.status(200).send(allCategories);
};
export default getCategoryController;
