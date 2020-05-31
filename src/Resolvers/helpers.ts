import * as fs from 'fs';
import * as path from 'path';

import { Lead } from '../Shared/interfaces';

export const mockLeadsResponse = (filename: string): Array<Lead> => {
  // This function retrieves the JSON file being requested and converts it to a javascript object
  const jsonURL = path.join(process.cwd() + `${filename}`);
  const rawJSONData = fs.readFileSync(jsonURL, 'utf-8');
  const leadData: Array<Lead> = JSON.parse(rawJSONData);
  return leadData;
};
