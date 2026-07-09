import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CartPage() {
  return (
    <div className="container py-12">
      <Card>
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your cart is currently empty.</p>
        </CardContent>
      </Card>
    </div>
  );
}
