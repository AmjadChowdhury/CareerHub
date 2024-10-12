import { MdManageAccounts } from "react-icons/md";
import { MdAcUnit } from "react-icons/md";
import { MdApartment } from "react-icons/md";
import { MdAppRegistration } from "react-icons/md";

const CategoryList = () => {
    return (
        <div>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-3 m-2">
                <div className="bg-[#0000FF1A] p-4 rounded-lg border-2 border-blue-700">
                    <MdManageAccounts className="text-6xl text-blue-900"></MdManageAccounts>
                    <p className="text-2xl font-bold text-blue-700">Accounts & Finance</p>
                    <p className="text-2xl font-bold">300+ jobs abailable</p>
                </div>
                <div className="bg-[#0000FF1A] p-4 rounded-lg border-2 border-blue-700">
                    <MdAcUnit className="text-6xl text-blue-900"></MdAcUnit>
                    <p className="text-2xl font-bold  text-blue-700">Creative Design</p>
                    <p className="text-2xl font-bold">100+ jobs abailable</p>
                </div>
                <div className="bg-[#0000FF1A] p-4 rounded-lg border-2 border-blue-700">
                    <MdApartment className="text-6xl text-blue-900"></MdApartment>
                    <p className="text-2xl font-bold text-blue-700">Marketing & Sales</p>
                    <p className="text-2xl font-bold">200+ jobs abailable</p>
                </div>
                <div className="bg-[#0000FF1A] p-4 rounded-lg border-2 border-blue-700">
                    <MdAppRegistration className="text-6xl text-blue-900"></MdAppRegistration>
                    <p className="text-2xl font-bold text-blue-700">Engineering Job</p>
                    <p className="text-2xl font-bold">120+ jobs abailable</p>
                </div>
            </section>
        </div>
    );
};

export default CategoryList;