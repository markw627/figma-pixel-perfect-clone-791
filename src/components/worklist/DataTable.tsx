import React from 'react';

interface PatientData {
  id: string;
  patientName: string;
  accountNumber: string;
  chargeReviewType: string;
  reqDate: string;
  reqAge: string;
  exitDate: string;
  action: string;
  actionDate: string;
  preReviewCharges: string;
  preReviewChargesDetail: string;
  postReviewCharges: string;
  postReviewChargesDetail: string;
  status: string;
}

interface DataTableProps {
  data?: PatientData[];
  onViewClick?: (patientId: string) => void;
}

const defaultData: PatientData[] = [
  {
    id: '1',
    patientName: 'Leslie Alexander',
    accountNumber: '098765432',
    chargeReviewType: 'Trauma Activation',
    reqDate: '05/23/25',
    reqAge: '6 Days',
    exitDate: '06/23/25',
    action: '1',
    actionDate: '06/23/25',
    preReviewCharges: '$ 164,857.49',
    preReviewChargesDetail: '12 Charges',
    postReviewCharges: '$30,000',
    postReviewChargesDetail: '23 Charges',
    status: 'Scheduled'
  },
  {
    id: '2',
    patientName: 'Leslie Alexander',
    accountNumber: '098765432',
    chargeReviewType: 'Trauma Activation',
    reqDate: '05/23/25',
    reqAge: '6 Days',
    exitDate: '06/23/25',
    action: '1',
    actionDate: '06/23/25',
    preReviewCharges: '$ 164,857.49',
    preReviewChargesDetail: '12 Charges',
    postReviewCharges: '$30,000',
    postReviewChargesDetail: '23 Charges',
    status: 'Scheduled'
  },
  {
    id: '3',
    patientName: 'Jacob Jones',
    accountNumber: '098765432',
    chargeReviewType: 'Trauma Activation',
    reqDate: '05/23/25',
    reqAge: '6 Days',
    exitDate: '06/23/25',
    action: '1',
    actionDate: '06/23/25',
    preReviewCharges: '$ 20,026.28',
    preReviewChargesDetail: '12 Charges',
    postReviewCharges: '$30,000',
    postReviewChargesDetail: '23 Charges',
    status: 'Scheduled'
  },
  {
    id: '4',
    patientName: 'Robert Fox',
    accountNumber: '098765432',
    chargeReviewType: 'Trauma Activation',
    reqDate: '05/23/25',
    reqAge: '6 Days',
    exitDate: '06/23/25',
    action: '1',
    actionDate: '06/23/25',
    preReviewCharges: '$ 1,451.76',
    preReviewChargesDetail: '12 Charges',
    postReviewCharges: '$30,000',
    postReviewChargesDetail: '23 Charges',
    status: 'Scheduled'
  },
  {
    id: '5',
    patientName: 'Savannah Nguyen',
    accountNumber: '098765432',
    chargeReviewType: 'Trauma Activation',
    reqDate: '05/23/25',
    reqAge: '6 Days',
    exitDate: '06/23/25',
    action: '1',
    actionDate: '06/23/25',
    preReviewCharges: '$ 21,593.09',
    preReviewChargesDetail: '12 Charges',
    postReviewCharges: '$30,000',
    postReviewChargesDetail: '23 Charges',
    status: 'Scheduled'
  },
  {
    id: '6',
    patientName: 'Lucille Jones',
    accountNumber: '098765432',
    chargeReviewType: 'Trauma Activation',
    reqDate: '05/23/25',
    reqAge: '6 Days',
    exitDate: '06/23/25',
    action: '1',
    actionDate: '06/23/25',
    preReviewCharges: '$ 12,677.42',
    preReviewChargesDetail: '12 Charges',
    postReviewCharges: '$30,000',
    postReviewChargesDetail: '23 Charges',
    status: 'Scheduled'
  },
  {
    id: '7',
    patientName: 'Arlene McCoy',
    accountNumber: '098765432',
    chargeReviewType: 'Trauma Activation',
    reqDate: '05/23/25',
    reqAge: '6 Days',
    exitDate: '06/23/25',
    action: '1',
    actionDate: '06/23/25',
    preReviewCharges: '$ 43,098.09',
    preReviewChargesDetail: '12 Charges',
    postReviewCharges: '$30,000',
    postReviewChargesDetail: '23 Charges',
    status: 'Scheduled'
  },
  {
    id: '8',
    patientName: 'Eleanor Pena',
    accountNumber: '098765432',
    chargeReviewType: 'Trauma Activation',
    reqDate: '05/23/25',
    reqAge: '6 Days',
    exitDate: '06/23/25',
    action: '1',
    actionDate: '06/23/25',
    preReviewCharges: '$ 22,718.55',
    preReviewChargesDetail: '12 Charges',
    postReviewCharges: '$30,000',
    postReviewChargesDetail: '23 Charges',
    status: 'Scheduled'
  },
  {
    id: '9',
    patientName: 'Devon Lane',
    accountNumber: '098765432',
    chargeReviewType: 'Trauma Activation',
    reqDate: '05/23/25',
    reqAge: '6 Days',
    exitDate: '06/23/25',
    action: '1',
    actionDate: '06/23/25',
    preReviewCharges: '$ 101,957.34',
    preReviewChargesDetail: '12 Charges',
    postReviewCharges: '$30,000',
    postReviewChargesDetail: '23 Charges',
    status: 'Scheduled'
  },
  {
    id: '10',
    patientName: 'Anthony Hardaway',
    accountNumber: '098765432',
    chargeReviewType: 'Trauma Activation',
    reqDate: '05/23/25',
    reqAge: '6 Days',
    exitDate: '06/23/25',
    action: '1',
    actionDate: '06/23/25',
    preReviewCharges: '$ 1,754.46',
    preReviewChargesDetail: '12 Charges',
    postReviewCharges: '$30,000',
    postReviewChargesDetail: '23 Charges',
    status: 'Scheduled'
  }
];

export const DataTable: React.FC<DataTableProps> = ({ 
  data = defaultData, 
  onViewClick 
}) => {
  const headers = [
    { key: 'patientName', label: 'Patient Name', width: 'w-[200px]' },
    { key: 'accountNumber', label: 'Account Number', width: 'w-[125px]' },
    { key: 'chargeReviewType', label: 'Charge Review Type', width: 'w-[159px]' },
    { key: 'reqDate', label: 'Req Date/Age', width: 'w-[107px]' },
    { key: 'exitDate', label: 'Exit Date', width: 'w-[82px]' },
    { key: 'action', label: 'Action', width: 'w-[53px]' },
    { key: 'actionDate', label: 'Action Date', width: 'w-[91px]' },
    { key: 'preReviewCharges', label: 'Pre-ReviewCharges', width: 'w-[135px]' },
    { key: 'postReviewCharges', label: 'Post ReviewCharges', width: 'w-[137px]' },
    { key: 'status', label: 'Status', width: 'flex-1' },
    { key: 'actions', label: '', width: 'w-[131px]' }
  ];

  return (
    <div className="w-full px-4 py-0 max-md:max-w-full">
      <table className="w-full">
        <thead>
          <tr className="flex w-full items-stretch flex-wrap max-md:max-w-full">
            {headers.map((header) => (
              <th
                key={header.key}
                className={`items-start relative flex gap-1 h-full ${header.width} bg-white p-1 text-left`}
              >
                <div className={`absolute z-0 ${header.width} bottom-0 inset-x-0`}>
                  <div className="flex min-h-px w-full bg-[#9B9B9B]" />
                </div>
                <div className="text-[#6F6F6F] text-sm font-bold leading-[22px] z-0">
                  {header.label}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={`flex w-full items-stretch flex-wrap max-md:max-w-full ${
                index % 2 === 0 ? 'bg-[#F6F6F6]' : 'bg-white'
              }`}
            >
              <td className="items-start relative flex gap-1 h-full w-[200px] p-1">
                <div className="items-center z-0 flex gap-1 text-sm text-[#181818] font-bold leading-loose my-auto">
                  <div className="gap-0.5 my-auto">
                    <div className="text-[#181818] text-sm leading-[22px]">
                      {row.patientName}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 w-[200px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
              
              <td className="items-start relative flex gap-1 h-full w-[125px] p-1">
                <div className="items-center z-0 flex gap-1 text-sm text-[#181818] font-normal whitespace-nowrap leading-loose my-auto">
                  <div className="gap-0.5 my-auto">
                    <div className="text-[#181818] text-sm leading-[22px]">
                      {row.accountNumber}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 w-[125px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
              
              <td className="items-start relative flex gap-1 h-full w-[159px] p-1">
                <div className="items-center z-0 flex gap-1 text-sm text-[#181818] font-normal leading-loose my-auto">
                  <div className="gap-0.5 my-auto">
                    <div className="text-[#181818] text-sm leading-[22px]">
                      {row.chargeReviewType}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 w-[159px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
              
              <td className="relative flex gap-0.5 h-full w-[107px] p-1">
                <div className="items-center z-0 flex gap-1 text-[#181818]">
                  <div className="gap-0.5 my-auto">
                    <div className="text-[#181818] text-sm font-normal leading-[22px]">
                      {row.reqDate}
                    </div>
                    <div className="text-[#181818] text-right text-xs font-medium leading-[18px]">
                      {row.reqAge}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 w-[107px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
              
              <td className="items-start relative flex gap-1 h-full w-[82px] p-1">
                <div className="items-center z-0 flex gap-1 text-sm text-[#181818] font-normal whitespace-nowrap leading-loose my-auto">
                  <div className="gap-0.5 my-auto">
                    <div className="text-[#181818] text-sm leading-[22px]">
                      {row.exitDate}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 w-[82px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
              
              <td className="items-start relative flex gap-1 h-full w-[53px] p-1">
                <div className="items-center z-0 flex gap-1 text-sm text-[#181818] font-normal whitespace-nowrap leading-loose my-auto">
                  <div className="gap-0.5 my-auto">
                    <div className="text-[#181818] text-sm leading-[22px]">
                      {row.action}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 w-[53px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
              
              <td className="items-start relative flex gap-1 h-full w-[91px] p-1">
                <div className="items-center z-0 flex gap-1 text-sm text-[#181818] font-normal whitespace-nowrap leading-loose my-auto">
                  <div className="gap-0.5 my-auto">
                    <div className="text-[#181818] text-sm leading-[22px]">
                      {row.actionDate}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 w-[91px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
              
              <td className="relative flex gap-0.5 h-full w-[137px] p-1">
                <div className="z-0 flex gap-1 text-[#181818] text-right">
                  <div className="gap-0.5">
                    <div className="text-[#181818] text-sm font-normal leading-[22px]">
                      {row.preReviewCharges}
                    </div>
                    <div className="text-[#181818] text-xs font-medium leading-[18px]">
                      {row.preReviewChargesDetail}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 w-[137px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
              
              <td className="relative flex gap-0.5 h-full w-[137px] p-1">
                <div className="z-0 flex gap-1 text-[#181818] text-right">
                  <div className="gap-0.5">
                    <div className="text-[#181818] text-sm font-normal leading-[22px]">
                      {row.postReviewCharges}
                    </div>
                    <div className="text-[#181818] text-xs font-medium leading-[18px]">
                      {row.postReviewChargesDetail}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 w-[137px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
              
              <td className="justify-center relative flex flex-col flex-1 shrink basis-[0%] gap-1 p-1">
                <div className="z-0 flex items-center gap-1 text-xs text-[#393939] font-medium whitespace-nowrap">
                  <div className="items-center rounded self-stretch flex min-h-6 gap-1 bg-[#E2E2E2] my-auto px-2 py-0">
                    <div className="text-[#393939] text-xs leading-[18px] self-stretch my-auto">
                      {row.status}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 w-[99px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
              
              <td className="justify-center items-start relative flex gap-1 h-full w-[130px] p-1">
                <div className="z-0 flex items-center gap-1 text-xs text-[#0077B5] font-bold whitespace-nowrap text-center my-auto">
                  <button
                    onClick={() => onViewClick?.(row.id)}
                    className="justify-center items-center border self-stretch flex gap-2 bg-[rgba(255,255,255,0.00)] my-auto px-3 py-[3px] rounded-[99px] border-solid border-[#0077B5] hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-[#0077B5] self-stretch my-auto">
                      View
                    </div>
                  </button>
                </div>
                <div className="absolute z-0 w-[130px] bottom-0 inset-x-0">
                  <div className="flex min-h-px w-full bg-[#B0B0B0]" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
