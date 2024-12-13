import { NavLink } from "react-router-dom";
import InputWithButton  from "../../../components/ui/input";
import { useTranslation } from "react-i18next";



const LogInView:React.FC=()=>{
  const { t } = useTranslation();
 return (
   <article className="w-[100%]">
     <div className="m-auto mt-20 flex w-[35%] flex-col gap-9 rounded-[10px] bg-slate-100 pb-10 pl-10 pr-10 pt-10 dark:bg-black dark:text-white">
       <div className="signTitle text-center">
         <h3 className="text-3xl font-extrabold">
           {t("LogIn-Page.Log in to BitBlogs")}
         </h3>
         <p>{t("LogIn-Page.Enter credentials")}</p>
       </div>

       <div className="signInputs">
         <InputWithButton />
       </div>

       <div className="signcardFooter flex justify-between w-[100%]">
         <p className="text-blue-600">{t("LogIn-Page.Forgot Password")}</p>

         <p className="text-[12px]">
           {t("LogIn-Page.Don't have an account")}
           <span>
             <NavLink className="text-blue-600 text-[12px]" to={"/Login/registration"}>
               {t("LogIn-Page.sign up")}
             </NavLink>
           </span>
         </p>
       </div>
     </div>
   </article>
 );
}

export default LogInView;

