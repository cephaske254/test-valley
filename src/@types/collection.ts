export interface Collection {
  id: number;
  type: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod: any;
  installmentPrice: any;
  installmentPeriod: any;
  rating: number;
  startDate: any;
  endDate: any;
  viewType: any;
  createdAt: string;
  items: any[];
  media: CollectionMedia[];
  thumbnail: CollectionThumbnail;
  taggings: any[];
  singleCollections: any[];
}

export interface CollectionMedia {
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  uuid: string;
  mimeType: string;
  uri: string;
  fileName: string;
  objectKey: string;
  deviceType: any;
  collectionId: number;
  seq: number;
  itemKey: any;
  type: string;
}

export interface CollectionThumbnail {
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  uuid: string;
  mimeType: string;
  uri: string;
  fileName: string;
  objectKey: string;
  deviceType: any;
  collectionId: number;
  seq: number;
  itemKey: any;
  type: string;
}
