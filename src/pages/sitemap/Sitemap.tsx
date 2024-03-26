import { navMenuItems } from "../../constans/data";

function Sitemap() {
  return (
    <div className="container mx-auto py-5 text-blue-500">
      {navMenuItems.map((item: any) => (
        <div className="list-disc">
          <li className="list-disc text-4xl mb-8">{item.title}</li>
          {item.items?.map((el: any) => {
            return (
              <div className="mb-8">
                <li className="list-disc ml-10 text-2xl mb-3">{el.label}</li>
                <ul className="ml-24">
                  {el.children?.map((child: any) => (
                    <li className="list-disc text-xl mb-2">{child.label}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Sitemap;
