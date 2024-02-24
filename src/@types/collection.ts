export interface Collection {
  id: number;
  type: CollectionType;
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
  viewType: CollectionViewType;
  createdAt: string;
  items: CollectionItem[];
  media: CollectionMedia[];
  thumbnail: CollectionThumbnail;
  taggings: any[];
  singleCollections: any[];
}

export type CollectionType = "BUNDLE" | "SINGLE";
export type CollectionViewType = null | "TILE";

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

export type CollectionItem = {
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  uuid: string;
  name: string;
  body: any;
  collectionId: number;
  key: string;
  seq: number;
  entityType: string;
  entityId: number;
  optionKey: any;
  publication: Publication;
  prdType: number;
};

export interface Publication {
  id: number;
  title: string;
  code: string;
  productId: number;
  prdType: number;
  detailEntity: string;
  content?: string;
  offeringType: string;
  rating: number;
  isExistResidual: boolean;
  isAdult: number;
  preface?: string;
  prefaceIconUrl?: string;
  productName: string;
  brandName: string;
  media: CollectionMedia[];
  isTrial: boolean;
  tagsOnImage: string[];
  tagsOnDesc: string[];
  priceInfo: PriceInfo;
  discounts: Discount[];
  applyCoupon: boolean;
}

export interface PriceInfo {
  price: number;
  discountPrice?: number;
  discountRate?: number;
  couponDiscountPrice?: number;
  couponDiscountRate?: number;
}

export interface Discount {
  id: number;
  name: any;
  type: string;
  calcMethod: string;
  value: number;
  activeFrom: any;
  activeTo: any;
  qty: number;
  remain: any;
}
