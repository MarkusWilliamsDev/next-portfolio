import { headers } from "next/headers";
import PlaygroundLayout from "../PlaygroundLayout";
import GeolocationDisplay from "./GeolocationDisplay";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const title = "Geolocation by IP";
const description =
	"Explore how to use Vercel's geolocation IP headers to determine a user's country.";

function getGeolocationData() {
	const headersList = headers();
	const country = headersList.get("x-vercel-ip-country") || "Unknown";
	const countryName =
		country !== "Unknown"
			? new Intl.DisplayNames(["en"], { type: "region" }).of(country) ||
			  "Unknown"
			: "Unknown";
	const city = headersList.get("x-vercel-ip-city") || "Unknown";
	const region = headersList.get("x-vercel-ip-country-region") || "Unknown";

	return { country, countryName, city, region };
}

export default function GeolocationPage() {
	const geolocationData = getGeolocationData();

	return (
		<PlaygroundLayout
			title={title}
			description={description}
			blogContent={<BlogContent />}
		>
			<GeolocationDisplay geolocationData={geolocationData} />
		</PlaygroundLayout>
	);
}

const BlogContent: React.FC = () => (
	<div className="space-y-4">
		<h3 className="text-xl font-semibold">What I Learned</h3>
		<p>
			In this playground, I explored how to use Vercel&apos;s geolocation IP
			headers to determine a user&apos;s location. This feature allows us to
			access information about the user&apos;s country, city, and region without
			relying on client-side APIs or external services.
		</p>
		<h3 className="text-xl font-semibold">How It Works</h3>
		<p>
			Vercel automatically adds geolocation headers to incoming requests. We can
			access these headers server-side using Next.js&apos;s `headers()`
			function. Here&apos;s the key part of the code that retrieves the
			geolocation data:
		</p>
		<SyntaxHighlighter language="typescript" style={vscDarkPlus}>
			{`function getGeolocationData() {
  const headersList = headers();
  const country = headersList.get('x-vercel-ip-country') || 'Unknown';
  const countryName = country !== 'Unknown' 
    ? new Intl.DisplayNames(['en'], { type: 'region' }).of(country) || 'Unknown'
    : 'Unknown';
  const city = headersList.get('x-vercel-ip-city') || 'Unknown';
  const region = headersList.get('x-vercel-ip-country-region') || 'Unknown';

  return { country, countryName, city, region };
}`}
		</SyntaxHighlighter>
		<p>
			This function retrieves the country code, city, and region from the
			headers. It also uses the `Intl.DisplayNames` API to convert the country
			code into a human-readable country name, with proper error handling.
		</p>
		<h3 className="text-xl font-semibold">Limitations and Considerations</h3>
		<p>
			While this method is fast and doesn&apos;t require any external API calls,
			it&apos;s important to note that:
		</p>
		<ul className="list-disc pl-5">
			<li>The accuracy of IP-based geolocation can vary.</li>
			<li>This feature is only available on Vercel&apos;s platform.</li>
			<li>Users with VPNs or proxy servers may show incorrect locations.</li>
			<li>
				The `Intl.DisplayNames` API might not support all country codes, so we
				need to handle potential undefined values.
			</li>
		</ul>
		<h3 className="text-xl font-semibold">Future Improvements</h3>
		<p>In the future, we could enhance this playground by:</p>
		<ul className="list-disc pl-5">
			<li>Adding a map visualization of the user&apos;s location.</li>
			<li>
				Providing more detailed information about the user&apos;s timezone.
			</li>
			<li>Implementing language suggestions based on the detected country.</li>
			<li>
				Adding a fallback mechanism for unsupported country codes in
				`Intl.DisplayNames`.
			</li>
		</ul>
	</div>
);
