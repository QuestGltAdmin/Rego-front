/**
 * Rego Logo Component.
 */
 export default function Logo({ small, icon }: { small?: boolean; icon?: boolean }) {
	return (
		<h1 className="inline">
			<strong>
				{icon ? (
					<img className="mx-auto w-9" alt="rego.com" title="Rego" src="/rego-logo-white.png" />
				) : (
					<img
						className={small ? "h-4 w-auto" : " p-1 h-10 sm:h-12 lg:h-16 2xl:h-20 w-auto"}
						alt="Rego Logo"
						title="Rego"
						src="/rego-logo-white.png"
					/>
				)}
			</strong>
		</h1>
	)
}