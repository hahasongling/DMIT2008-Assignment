import { cn } from "@/lib/utils/mergeCss";

function BuyNow({ className, productPriceId }) {
	return (
		<form action="/api/checkout" className={cn(" ", className)} method="POST">
			<input type="hidden" name="id" value="from dashboard" />

			<input type="hidden" name="price" value={productPriceId} />
			<button type="submit" value="submit">
				Buy Now
			</button>
		</form>
	);
}

export { BuyNow };
