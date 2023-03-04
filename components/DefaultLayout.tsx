import Head from "next/head";
import Link from "next/link";
import NavBar from "./NavBar";






function DefaultLayout({ children }: { children?: JSX.Element }) {

 
    return (
        <div className="w-full gap-y-10 ">


            <div className="bg-green-500 w-full overscroll-x-auto  ">
                
                <NavBar/>
             
                <div className="bg-white w-full">
                    <main>

                        <Head>
                            <title>NACOS MTU</title>

                            <link rel="icon" href="/logo.ico" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                          
                        </Head>


                        {children}

                       
                    </main>

                </div>



            </div>



        </div>
    )
}

export default DefaultLayout;