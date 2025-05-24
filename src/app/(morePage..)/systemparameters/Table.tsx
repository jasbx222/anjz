import { AppSettings } from "@/app/models/types.";

type Props = {
  data: AppSettings;

};
export  const Table = ({data}:Props) => {


  return (
 <div className="overflow-x-auto rounded-lg shadow border border-gray-200 p-4 bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
        <tbody className="divide-y divide-gray-100">
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">ID</th>
            <td className="py-2 px-3">{data?.id}</td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">WhatsApp</th>
            <td className="py-2 px-3">
              <a href={data.whatsApp} className="text-blue-600 hover:underline" target="_blank">
                {data.whatsApp}
              </a>
            </td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Facebook</th>
            <td className="py-2 px-3">
              <a href={data.facebook} className="text-blue-600 hover:underline" target="_blank">
                {data.facebook}
              </a>
            </td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Instagram</th>
            <td className="py-2 px-3">
              <a href={data.instagram} className="text-blue-600 hover:underline" target="_blank">
                {data.instagram}
              </a>
            </td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Android Version</th>
            <td className="py-2 px-3">{data.main_app_version}</td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">iOS Version</th>
            <td className="py-2 px-3">{data.main_app_version_ios}</td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Android Link</th>
            <td className="py-2 px-3">
              <a href={data.app_android_link} className="text-blue-600 hover:underline" target="_blank">
                {data.app_android_link}
              </a>
            </td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Direct APK</th>
            <td className="py-2 px-3">
              <a href={data.app_android_direct_link} className="text-blue-600 hover:underline" target="_blank">
                {data.app_android_direct_link}
              </a>
            </td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">iOS Link</th>
            <td className="py-2 px-3">
              <a href={data.app_ios_link} className="text-blue-600 hover:underline" target="_blank">
                {data.app_ios_link}
              </a>
            </td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Privacy Policy</th>
            <td className="py-2 px-3">
              <a href={data.policy_and_privacy} className="text-blue-600 hover:underline" target="_blank">
                {data.policy_and_privacy}
              </a>
            </td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Support Email</th>
            <td className="py-2 px-3">{data.communication_with_support}</td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">iOS Test</th>
            <td className="py-2 px-3">{data.ios_test}</td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Created At</th>
            <td className="py-2 px-3">{new Date(data.created_at).toLocaleString()}</td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Updated At</th>
            <td className="py-2 px-3">{new Date(data.updated_at).toLocaleString()}</td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Created By</th>
            <td className="py-2 px-3">{data.created_by ?? "—"}</td>
          </tr>
          <tr>
            <th className="font-semibold py-2 px-3 text-gray-600">Updated By</th>
            <td className="py-2 px-3">{data.updated_by ?? "—"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

