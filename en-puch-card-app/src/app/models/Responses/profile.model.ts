import { TotalLogsModel } from './totalLogs.model';

export class ProfileModel {
  AciveDate: string | undefined;
  CreateDate: string | undefined;
  DisplayName: string | undefined;
  Email: string | undefined;
  Gender: string | undefined;
  GenderKey: string | undefined;
  HasUploadImage: boolean | undefined;
  HeaderBackground: string | undefined;
  LastUploadImageDate: string | undefined;
  Mobile: string | undefined;
  MoreDesc: string | undefined;
  OfficeCount: number | undefined;
  ShamsiMobileApprovedDate: string | undefined;
  TotalLogs: Array<TotalLogsModel> | undefined;
  TotalLogsIdCount: number | undefined;
  TotalPrivateMessages: number | undefined;
}
