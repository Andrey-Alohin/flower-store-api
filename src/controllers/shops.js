export const getAllShopesController = async (req, res, next) => {
  const data = await getAllShops();
  res.status(200).json({
    status: 200,
    message: 'Get all stores',
    data,
  });
};

export const getShopByIdController = async (req, res, next) => {
  const { shopId } = req.params;

  const data = await getShopById(shopId);

  return res.status(200).json({
    status: 200,
    message: `Get store by id ${shopId}!`,
    data,
  });
};
