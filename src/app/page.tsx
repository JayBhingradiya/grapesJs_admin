"use client";
export interface serversideDataProps {
  id: number;
  name: string;
}
const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-white rounded-lg shadow-lg">
            <caption className="text-lg font-semibold text-gray-700 p-4">
              CMS Admin Page Links url
            </caption>
            <thead className="bg-blue-500 text-white uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6">Website Link</th>
                <th className="py-3 px-6">Page Builder Link</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://lano.redefineapp.io/"}>Lano HomePage</a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/grapesjs"}>Lano HomePage</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://lano.redefineapp.io/about-us.html"}>
                    Lano AboutUs
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/aboutUs"}>Lano AboutUs</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://lano.redefineapp.io/parts.html"}>
                    Lano Part
                  </a>
                </td>
                <td className="py-3 px-6">
                  {" "}
                  <a href={"/parts"}>Lano Part</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://lano.redefineapp.io/bobcat.html"}>
                    Lano Bobcat
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/bobcat"}>Lano Bobcat</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a
                    href={
                      "https://lano.redefineapp.io/terms-and-conditions.html"
                    }
                  >
                    Lano Terms and conditions
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/terms-and-conditions"}>
                    Lano Terms and conditions
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"/yashmay"}>Yashmay</a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/yashmay"}>Yashmay</a>
                </td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://lano.redefineapp.io/brands.html"}>
                    Alphabet Brands
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/alphabet-brand"}>Alphabet Brands</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a
                    href={
                      "https://themes.shopify.com/themes/amber/styles/amber/preview?industry%5B%5D=food-and-drink&price%5B%5D=paid&surface_detail=listing&surface_inter_position=1&surface_intra_position=1&surface_type=listing"
                    }
                  >
                    Shopify CMS
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/demoSite"}>Shopify CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a
                    href={
                      "https://themes.shopify.com/themes/amber/styles/amber/preview?industry%5B%5D=food-and-drink&price%5B%5D=paid&surface_detail=listing&surface_inter_position=1&surface_intra_position=1&surface_type=listing"
                    }
                  >
                    Shopify CMS AboutUs
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/demoAboutUs"}>Shopify CMS AboutUs</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.rimmellondon.com/en-gb"}>
                    Rimmel London, Contentstack CMS
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/contentStack_rimmel_london"}>
                    Rimmel London, Contentstack CMS
                  </a>{" "}
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://kirschberg.co.nz/"}>
                    {" "}
                    Kirschberg, Dato CMS
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/kirschberg_cms"}> Kirschberg, Dato CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://dashdigital.studio/"}>
                    Dash Digital Studio, Prismic CMS
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/dashDigital_prismic"}>
                    Dash Digital Studio, Prismic CMS
                  </a>{" "}
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.darrenbooth.com/"}>
                    Darren Booth, Squarespace CMS
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/tiltonGroup_CMS"}>Darren Booth, Squarespace CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.hampy.be/"}>Hampy, DNN CMS</a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/hampyBe_CMS"}>Hampy, DNN CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.bulkapothecary.com/"}>
                    Bulk Apothecary, BigCommerce CMS
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/bulkapothecary_bigCommerce"}>
                    Bulk Apothecary, BigCommerce CMS
                  </a>{" "}
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.giuligartner.com/"}>
                    Giulia Gartner, Webflow CMS
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={"/giuligartner_cms"}>Giulia Gartner, Webflow CMS</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Home;
