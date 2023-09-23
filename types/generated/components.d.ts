import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    schema: Attribute.JSON;
    metaDescription: Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'seo.seo': SeoSeo;
    }
  }
}
