import { SelectedPage } from "@/types/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const ReviewsItem = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <div className="mt-5 flex flex-col justify-between rounded-md border-2 border-gray-100 px-5 py-10 text-center md:min-h-[480px]">
      <div>
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            {icon}
          </div>
        </div>

        <h4 className="font-bold">{title}</h4>
        <p className="my-3 text-left text-sm">{description}</p>
      </div>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Узнать больше</p>
      </AnchorLink>
    </div>
  );
};

export default ReviewsItem;
