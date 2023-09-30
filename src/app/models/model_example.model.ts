export interface ExampleInterfaceModel {
  id?: number;
  name: string;
  status: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: object;
  location?: {
    name?: string;
    url?: string;
  };
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}
