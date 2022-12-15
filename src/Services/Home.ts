const baseUrl = 'http://localhost:3000';

export const getFiveProduct = async (): Promise<Response> => {
  return await fetch(`${baseUrl}/products/getDiscoverProduct`);
};

