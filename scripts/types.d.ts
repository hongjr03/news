export type TFallbackLang = "en";

export interface I18n<T> {
  [lang: string]: T;
  [key in TFallbackLang]: T;
}

export interface NewsMeta {
  id: string;
  date: string;
  /**
   * Path to content
   */
  content: I18n<string>;
  description: I18n<string>;
  tags: I18n<string[]>;
  title: I18n<string>;
}

/**
 * Metadata for a single file (a specific language)
 */
export interface FileMeta {
  date: string;
  description: string;
  tags: string[];
  title: string;
}

export type FileMetaElem = {
  func: "meta";
  label: "<front-matter>";
  value: FileMeta;
};
