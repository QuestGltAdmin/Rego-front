import React, { Fragment, ReactNode, useEffect } from 'react'
import classNames from 'lib/classNames';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AiFillCaretDown, AiFillDashboard, AiFillSetting, AiFillWallet, AiOutlineForm, AiOutlineHistory, AiOutlineLogout, AiOutlineMenu, AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai';
import ErrorBoundary from 'lib/ErrorBoundary';
import Logo from './Logo';
import Dropdown, { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from 'components/ui/Dropdown';
import Avatar from './ui/Avatar';
import { blue, indigo, violet } from '@radix-ui/colors'
import { logout } from '../store/reducers/authReducer.js'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function useRedirectToLoginIfUnauthenticated(isPublic = false) {
	//Logic Here

	useEffect(() => {

	}, [])
}


type CocoonSubHeadingProps = {
	title: ReactNode;
	subtitle?: ReactNode;
	actions?: ReactNode;
	className?: string;
}
export function CocoonSubHeading({ title, subtitle, actions, className }: CocoonSubHeadingProps) {
	return (
		<>
			<div className={classNames("my-2 block justify-between sm:flex", className)}>
				<div>
					<h2 className="flex content-center items-center space-x-2 text-base font-bold leading-6 text-gray-900 rtl:space-x-reverse">
						{title}
					</h2>
					{subtitle && <p className="text-sm text-neutral-500 ltr:mr-4">{subtitle}</p>}
				</div>
				{actions && <div className="flex flex-shrink-0 items-center">{actions}</div>}
			</div>
			<hr className="mb-2 border-blue-700" />
		</>
	)
}



type LayoutProps = {
	flexChildrenContainer?: boolean;
	centered?: boolean;
	isLoading?: boolean;
	customLoader?: ReactNode;
}
const Layout = (props: LayoutProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	const status = "authenticated";

	const navigation = [
		{
			path: "/dashboard",
			name: "Dashboard",
			icon: AiFillDashboard,
			current: location.pathname.includes("/dashboard"),
			// component: React.lazy(() => import("pages/public")),
		},
		{
			path: "/buy-crypto",
			name: "Buy Sell",
			icon: AiFillDashboard,
			current: location.pathname.includes("/buy-crypto"),
			// component: React.lazy(() => import("pages/public")),
		},
		{
			path: "/nft",
			name: "NFT",
			icon: AiFillDashboard,
			current: location.pathname.includes("/nft"),
			// component: React.lazy(() => import("pages/public")),
		},
		{
			path: "/swap",
			name: "Swap",
			icon: AiFillDashboard,
			current: location.pathname.includes("/swap"),
			// component: React.lazy(() => import("pages/public")),
		},
		{
			path: "/fixed-deposit",
			name: "Fixed Deposit",
			icon: AiFillDashboard,
			current: location.pathname.includes("/fixed-deposit"),
			// component: React.lazy(() => import("pages/public")),
		},
		{
			path: "/basket-sip",
			name: "Basket/SIP",
			icon: AiFillDashboard,
			current: location.pathname.includes("/basket-sip"),
			// component: React.lazy(() => import("pages/public")),
		},
		{
			path: "/pro-trading",
			name: "Pro Trading",
			icon: AiFillDashboard,
			current: location.pathname.includes("/pro-trading")
			// component: React.lazy(() => import("pages/public")),
		},
		{
			path: "/p2p",
			name: "P2P",
			icon: AiFillDashboard,
			current: location.pathname.includes("/p2p")
			// component: React.lazy(() => import("pages/public")),
		},
		{
			path: "/blog-news",
			name: "Blog and News",
			icon: AiFillDashboard,
			current: location.pathname.includes("/blog-news"),
			// component: React.lazy(() => import("pages/public")),
		},
	]


	return (
		<div className={classNames("flex h-screen overflow-hidden ")}>
			<div className="flex w-0 flex-1 flex-col overflow-hidden">
				{/* <div className='flex h-14'>Header</div> */}
				<div className="z-10 fixed w-full px-4 md:px-6 lg:px-10">


					<nav className="flex max-h-13 items-center mt-2 justify-between bg-white">
						<Link to="/dashboard" className=''>
							<Logo />
						</Link>
						<div className="hidden md:flex">Search</div>
						<div className="flex items-center gap-2 self-center">
							<span className="group flex items-center rounded-full p-2.5 text-sm font-medium text-neutral-500 hover:bg-gray-50 hover:text-neutral-900 lg:hidden">
								{/* <KBarTrigger /> */}
								<div>Search</div>
							</span>
							<button className="rounded-full bg-white p-2 text-gray-400 hover:bg-gray-50 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
								<span className="sr-only">{"Wallet"}</span>
								<Link to="/wallet" className="flex gap-x-2">
									<AiFillWallet className="h-6 w-6" aria-hidden="true" />
									<span className='inline font-medium'>{"Wallet"}</span>
								</Link>
							</button>
							<div className='hidden sm:flex'>

								<UserDropdown />
							</div>
							<div className='sm:hidden'>

								<UserDropdown small />
							</div>

						</div>
					</nav>
					<nav
						className="flex overflow-x-auto max-h-13 items-center gap-x-4 my-2 border-b border-gray-200 bg-white">
						{navigation.map((menu) =>
							!menu ? null : (

								<Fragment key={menu.name}>
									<NavLink to={menu.path}
										aria-label={menu.name}
										className={({ isActive }) => classNames(
											// "flex items-center group gap-x-2",
											isActive
												? "text-blue-800 border-b-4 border-blue-800 "
												: "text-gray-400 hover:text-slate-500 ",
											" flex group items-center rounded-sm p-2 no-underline gap-x-2 text-lg font-medium "
										)}
									>
										{/* <menu.icon
											className={classNames(
												menu.current
												?"text-blue-500"
												:"text-gray-400 group-hover:text-slate-500"
											)}
										/> */}
										<span className="inline whitespace-nowrap">{menu.name}</span>
									</NavLink>
								</Fragment>
							)
						)}



					</nav>
				</div>
				<main
					style={{ backgroundColor: violet.violet5 }}
					className={classNames(
						"relative container rounded-xl mx-auto backdrop-blur-lg z-0 flex-1 mt-28 md:mt-32 lg:mt-36 xl:mt-40 py-2 overflow-y-auto scroll-smooth  focus:outline-none px-2 ",
						// status === "authenticated" && "max-w-[2560px] ",
						props.flexChildrenContainer && "flex flex-col "
					)}>
					{/* show top navigation for md and smaller (tablet and phones) */}
					{/* {status === "authenticated" && ( */}

					{/* )} */}
					<div
						className={classNames(

							props.centered && " mx-auto md:max-w-5xl ",
							props.flexChildrenContainer && " flex flex-1 flex-col ",
							// !props.large && "py-8"
						)}>
						{/* <ImpersonatingBanner /> */}
						{/* {!!props.backPath && (
              <div className="mx-3 mb-8 sm:mx-8">
                <Button
                  onClick={() => navigate(props.backPath as string)}
                  StartIcon={AiFillLeftCircle}
                  color="secondary">
                  Back
                </Button>
              </div>
            )} */}


						{/* {props.heading && (
                <div
                  className={classNames(
                    // props.large && "bg-gray-100 py-8 lg:mb-8 lg:pt-16 lg:pb-7",
                    "block justify-between px-4 sm:flex sm:px-6 md:px-8"
                  )}>
                  {props.HeadingLeftIcon && <div className="ltr:mr-4">{props.HeadingLeftIcon}</div>}
                  <div className="mb-8 w-full">
                    {props.isLoading ? (
                      <>
                        <div className="mb-1 h-6 w-24 animate-pulse rounded-md bg-gray-200" />
                        <div className="mb-1 h-6 w-32 animate-pulse rounded-md bg-gray-200" />
                      </>
                    ) : (
                      <>
                        <h1 className="font-cal mb-1 text-xl font-bold capitalize tracking-wide text-gray-900">
                          {props.heading}
                        </h1>
                        <p className="text-sm text-neutral-500 ltr:mr-4 rtl:ml-4">{props.subtitle}</p>
                      </>
                    )}
                  </div>
                  {props.CTA && <div className="mb-4 flex-shrink-0">{props.CTA}</div>}
                </div>
              )} */}
						<div
							className={classNames(
								// "px-4 sm:px-6 md:px-8",

								props.flexChildrenContainer && "flex flex-1 flex-col"
							)}>
							<ErrorBoundary>{!props.isLoading ? <Outlet /> : props.customLoader}</ErrorBoundary>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

const MemoizedLayout = React.memo(Layout);

type CocoonProps = {

}

export default function Cocoon({ }: CocoonProps) {
	return (
		<>
			<MemoizedLayout />
		</>
	)
}


function UserDropdown({ small }: { small?: boolean }) {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const signOut = async ({ callbackUrl }: { callbackUrl: string }) => {
		try {
			// alert("add server logout api✅");
			toast.success("Logout Successful", {
				position: "top-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
			});
			localStorage.removeItem("accessToken");
			dispatch(logout());
			navigate(callbackUrl);
		} catch (err: any) {
			localStorage.removeItem("accessToken");
			navigate(`/error/${err.message}`);
		}
	}

	return (
		<Dropdown >
			<DropdownMenuTrigger asChild>
				<div className="flex items-center w-full space-x-2 cursor-pointer group">
					<span
						className={classNames(
							small ? " w-10" : " w-12",
							"bg-gray-300 rounded-full flex-shrink-0 hidden sm:flex"
						)}
					>
						<Avatar
							className="shadow-xl "
							imageSrc={
								"/images/profile.png"
							}
							size={10}
							//   gravatarFallbackMd5={"sfhgs"}
							alt={"Nameless User"}
						/>
					</span>
					{!small ? (
						""
					) : (
						<AiOutlineMenu
							className="w-8 h-auto text-clr1 group-hover:text-gray-500"
							aria-hidden="true"
						/>
					)}
					{!small && (
						<span className="flex items-center flex-grow truncate">
							<span className="flex-grow text-sm truncate">
								{/* <span className="block text-lg font-medium text-clr1 truncate">
                  {"Nameless User"}
                </span>
                <span className="block font-normal truncate text-neutral-500">
                  {
                "No public page"}
                </span> */}
							</span>
							<AiFillCaretDown
								className="flex-shrink-0 w-5 h-5 text-gray-500 group-hover:text-clr1"
								aria-hidden="true"
							/>
						</span>
					)}
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className=" w-fit mr-5">

				<DropdownMenuItem className="rounded-t-xl group">
					<Link to="/wallet" className="flex items-center gap-x-2 px-4 py-2 text-lg cursor-pointer hover:rounded-t-lg hover:bg-white hover:text-clr1 hover:font-semibold">
						<AiOutlineUser
							className={classNames(
								" text-white text-lg group-hover:text-clr1 hover:text-clr1 hover:font-semibold",
								" flex-shrink-0 h-5 w-5"
							)}
							aria-hidden="true"
						/>
						{"Deposit INR"}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="h-px bg-gray-200" />
				<DropdownMenuItem className="rounded-t-xl group">
					<Link to="/wallet" className="flex items-center gap-x-2 px-4 py-2 text-lg cursor-pointer hover:bg-white hover:text-clr1 hover:font-semibold">
						<AiOutlineUser
							className={classNames(
								" text-white text-lg group-hover:text-clr1 hover:text-clr1 hover:font-semibold",
								"mr-2 flex-shrink-0 h-5 w-5"
							)}
							aria-hidden="true"
						/>
						<span className="inline whitespace-nowrap">{"Import Funds"}</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="h-px bg-gray-200" />
				<DropdownMenuItem className="rounded-t-xl group">
					<Link to="/history" className="flex items-center gap-x-2 px-4 py-2 text-lg cursor-pointer hover:bg-white hover:text-clr1 hover:font-semibold">
						<AiOutlineHistory
							className={classNames(
								" text-white text-lg group-hover:text-clr1 hover:text-clr1 hover:font-semibold",
								"mr-2 flex-shrink-0 h-5 w-5"
							)}
							aria-hidden="true"
						/>
						{"History"}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="h-px bg-gray-200" />
				<DropdownMenuItem className="rounded-t-xl group">
					<Link to="/kyc" className="flex items-center gap-x-2 px-4 py-2 text-lg cursor-pointer hover:bg-white hover:text-clr1 hover:font-semibold">
						<AiOutlineForm
							className={classNames(
								" text-white text-lg group-hover:text-clr1 hover:text-clr1 hover:font-semibold",
								"mr-2 flex-shrink-0 h-5 w-5"
							)}
							aria-hidden="true"
						/>
						{"KYC"}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="h-px bg-gray-200" />
				<DropdownMenuItem className="rounded-t-xl group">
					<Link to="/support" className="flex items-center gap-x-2 px-4 py-2 text-lg cursor-pointer hover:bg-white hover:text-clr1 hover:font-semibold">
						<AiOutlineUser
							className={classNames(
								" text-white text-lg group-hover:text-clr1 hover:text-clr1 hover:font-semibold",
								"mr-2 flex-shrink-0 h-5 w-5"
							)}
							aria-hidden="true"
						/>
						<span className="inline whitespace-nowrap">{"Support"}</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="h-px bg-gray-200" />
				<DropdownMenuItem className="rounded-t-xl group">
					<Link to="/settings" className="flex items-center gap-x-2 px-4 py-2 text-lg cursor-pointer  hover:bg-white hover:text-clr1 hover:font-semibold">
						<AiFillSetting
							className={classNames(
								" text-white text-lg group-hover:text-clr1 hover:text-clr1 hover:font-semibold",
								"mr-2 flex-shrink-0 h-5 w-5"
							)}
							aria-hidden="true"
						/>
						{"Settings"}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="h-px bg-gray-200" />
				<DropdownMenuItem className="rounded-t-xl group">
					<Link to="/referral" className="flex items-center gap-x-2 px-4 py-2 text-lg cursor-pointer  hover:bg-white hover:text-clr1 hover:font-semibold">
						<AiOutlineUserAdd
							className={classNames(
								" text-white text-lg group-hover:text-clr1 hover:text-clr1 hover:font-semibold",
								"mr-2 flex-shrink-0 h-5 w-5"
							)}
							aria-hidden="true"
						/>
						{"Referral"}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="h-px bg-gray-200" />
				{/* <DropdownMenuItem className=" group">
          <Link to="/change-Password" className="flex px-4 py-2 text-xl cursor-pointer hover:bg-white hover:text-clr1 hover:font-semibold">
              <KeyIcon
                className={classNames(
                  "text-white text-xl group-hover:text-clr1 hover:text-clr1 hover:font-semibold",
                  "mr-2 flex-shrink-0 h-5 w-5"
                )}
                aria-hidden="true"
              />
              {"Change Pin"}
          </Link>
        </DropdownMenuItem> */}
				{/* <DropdownMenuSeparator className="h-px bg-gray-200" /> */}
				{/* <DropdownMenuItem className=" group">
          <Link to="/support" className="flex px-4 py-2 text-xl cursor-pointer hover:bg-white hover:text-clr1 hover:font-semibold">
              <SupportIcon
                className={classNames(
                  "text-white text-xl group-hover:text-clr1 hover:text-clr1 hover:font-semibold",
                  "mr-2 flex-shrink-0 h-5 w-5"
                )}
                aria-hidden="true"
              />
              {"Support"}
          </Link>
        </DropdownMenuItem> */}
				{/* <HelpMenuItemDynamic /> */}
				{/* <DropdownMenuSeparator className="h-px bg-gray-200" /> */}
				<DropdownMenuItem className="rounded-b-xl group">
					<p
						onClick={() => signOut({ callbackUrl: "/auth/login" })}
						className="flex px-4 items-center gap-x-2 py-2 text-lg cursor-pointer hover:rounded-b-lg hover:bg-white hover:text-clr1 hover:font-semibold"
					>
						<AiOutlineLogout
							className={classNames(
								"text-white text-lg group-hover:text-clr1 hover:text-clr1 hover:font-semibold",
								"mr-2 flex-shrink-0 h-5 w-5"
							)}
							aria-hidden="true"
						/>
						{"Log Out"}
					</p>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</Dropdown>
	);
}