export interface Lead {
  id: string;
  firstName: string;
  emailAddress: string;
}

export interface RawLead {
  firstName: string;
  emailAddress: string;
}

export interface UpdateResponse {
  success: boolean;
  lead: Lead;
}
