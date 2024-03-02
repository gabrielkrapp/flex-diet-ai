export interface DietData {
    [key: string]: {
      prato?: string;
      opcoes?: string[];
    } | string;
}