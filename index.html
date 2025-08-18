import React, { useMemo, useState, useContext, createContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Star, Sparkles, Menu, ArrowRight, X, Minus, Plus, Trash2, CreditCard } from "lucide-react";

// --------------------------------------------------
// Demo Data (add more to taste)
// --------------------------------------------------
const PRODUCTS = [
  {
    id: 1,
    name: "Vintage Leather Backpack",
    priceText: "£129",
    price: 129,
    img: "https://images.unsplash.com/photo-1518544889289-1e1c1f60bf4e?w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518544889289-1e1c1f60bf4e?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1200&auto=format&fit=crop",
    ],
    desc: "A handcrafted backpack made from premium full-grain leather, designed for durability and timeless style.",
  },
  {
    id: 2,
    name: "Classic Sneakers",
    priceText: "£89",
    price: 89,
    img: "https://images.unsplash.com/photo-1528701800489-20be9c1e3c56?w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1528701800489-20be9c1e3c56?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&auto=format&fit=crop",
    ],
    desc: "Minimalist everyday trainers with a cushioned sole and breathable mesh upper.",
  },
  {
    id: 3,
    name: "Handmade Ceramic Mug",
    priceText: "£25",
    price: 25,
    img: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524594227084-1f06586fdc37?w=1200&auto=format&fit=crop",
    ],
    desc: "Each mug is wheel-thrown and glazed by hand. No two are identical.",
  },
  {
    id: 4,
    name: "Wool Knit Sweater",
    priceText: "£75",
    price: 75,
    img: "https://images.unsplash.com/photo-1602810318383-e445606f2240?w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e445606f2240?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539533113208-f6df8cc0f3f2?w=1200&auto=format&fit=crop",
    ],
    desc: "Cozy, soft, and breathable — made from 100% organic wool.",
  },
  {
    id: 5,
    name: "Modern Desk Lamp",
    priceText: "£55",
    price: 55,
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200&auto=format&fit=crop",
    ],
    desc: "Sleek, energy‑efficient lamp with adjustable brightness and a warm glow.",
  },
  {
    id: 6,
    name: "Minimalist Chair",
    priceText: "£220",
    price: 220,
    img: "https://images.unsplash.com/photo-1616627986882-0cb5f9e3a908?w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1616627986882-0cb5f9e3a908?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop",
    ],
    desc: "A modern, ergonomic silhouette inspired by Scandinavian design.",
  },
];

// --------------------------------------------------
// Cart Context (global state)
// --------------------------------------------------
const CartContext = createContext(null);
function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

function CartProvider({ children }) {
  const [items, setItems] = useState([]); // {id, name, img, price, priceText, qty}

  const add = (product, qty = 1) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
      }
      return [
        ...prev,
        { id: product.id, name: product.name, img: product.img, price: product.price, priceText: product.priceText, qty },
      ];
    });
  };
  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const inc = (id) => setItems((p) => p.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const dec = (id) => setItems((p) => p.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i)));
  const clear = () => setItems([]);

  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  const value = { items, add, remove, inc, dec, clear, subtotal, count };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// --------------------------------------------------
// UI — Shell & Nav
// --------------------------------------------------
function Nav({ onOpenCart, go }) {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <button onClick={() => go("home")} className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" aria-hidden />
          <span className="font-semibold">DemoShop</span>
        </button>
        <nav className="hidden gap-6 text-sm md:flex">
          <button onClick={() => go("home")} className="opacity-80 hover:opacity-100">Home</button>
          <a href="#products" className="opacity-80 hover:opacity-100">Products</a>
          <button onClick={() => go("checkout")} className="opacity-80 hover:opacity-100">Checkout</button>
        </nav>
        <Button onClick={onOpenCart} className="inline-flex gap-2" size="sm">
          <ShoppingCart className="h-4 w-4" /> Cart ({count})
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,theme(colors.pink.500/15),transparent_60%)]">
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-tight md:text-6xl"
        >
          Make It Pop ✨ Shop the Demo
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          A flashy, modern e‑commerce template with buttery animations, bold visuals, and a fully interactive cart & checkout.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#products">
            <Button size="lg" className="gap-2">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// Product Listing & Details
// --------------------------------------------------
function ProductDetailModal({ product, onClose, onAdd }) {
  const [imgIdx, setImgIdx] = useState(0);
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl rounded-3xl bg-background p-6 shadow-2xl"
          >
            <button onClick={onClose} className="absolute right-4 top-4 rounded-full bg-muted p-2 hover:bg-muted/70">
              <X className="h-5 w-5" />
            </button>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={product.gallery?.[imgIdx] || product.img} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {(product.gallery || [product.img]).map((g, i) => (
                    <button key={i} onClick={() => setImgIdx(i)} className={`overflow-hidden rounded-xl border ${i === imgIdx ? "ring-2" : ""}`}>
                      <img src={g} alt={`${product.name} ${i + 1}`} className="h-16 w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <div className="mt-2 flex items-center gap-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : ""}`} />
                  ))}
                  <span className="text-sm text-muted-foreground">(124 reviews)</span>
                </div>
                <p className="mt-3 text-muted-foreground">{product.desc}</p>
                <p className="mt-4 text-3xl font-extrabold">{product.priceText}</p>
                <div className="mt-6 flex gap-3">
                  <Button onClick={() => onAdd(product)} className="gap-2">
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </Button>
                  <Button variant="outline">Wishlist</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Products() {
  const { add } = useCart();
  const [selected, setSelected] = useState(null);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Products</h2>
        <p className="mt-3 text-muted-foreground">Click any product to see details. Add to cart from the modal or the card.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Card className="group overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
              <button onClick={() => setSelected(p)} className="relative block w-full">
                <div className="relative aspect-square w-full overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
              </button>
              <CardHeader>
                <CardTitle className="text-lg">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className="font-semibold">{p.priceText}</span>
                <Button size="sm" className="gap-2" onClick={() => add(p)}>
                  <ShoppingCart className="h-4 w-4" /> Add
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <ProductDetailModal product={selected} onClose={() => setSelected(null)} onAdd={(p) => { add(p); setSelected(null); }} />
    </section>
  );
}

// --------------------------------------------------
// Mini Cart Drawer
// --------------------------------------------------
function MiniCart({ open, onClose, go }) {
  const { items, inc, dec, remove, subtotal } = useCart();
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={onClose}
          />
          <motion.aside
            key="drawer"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l bg-background p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Your Cart</h3>
              <Button size="icon" variant="ghost" onClick={onClose} aria-label="Close">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-4">
              {items.length === 0 && (
                <p className="text-muted-foreground">Your cart is empty. Start adding some goodies!</p>
              )}
              {items.map((i) => (
                <Card key={i.id} className="overflow-hidden">
                  <CardContent className="flex gap-3 p-3">
                    <img src={i.img} alt={i.name} className="h-20 w-20 rounded-xl object-cover" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-medium leading-tight">{i.name}</div>
                          <div className="text-sm text-muted-foreground">{i.priceText}</div>
                        </div>
                        <Button size="icon" variant="ghost" onClick={() => remove(i.id)} aria-label="Remove">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-full border px-2 py-1">
                        <button onClick={() => dec(i.id)} aria-label="Decrease"><Minus className="h-4 w-4" /></button>
                        <span className="min-w-[2ch] text-center text-sm">{i.qty}</span>
                        <button onClick={() => inc(i.id)} aria-label="Increase"><Plus className="h-4 w-4" /></button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-xl font-extrabold">£{subtotal.toFixed(2)}</span>
            </div>
            <Button className="mt-4 w-full gap-2" onClick={() => { onClose(); go("cart"); }}>
              View Cart <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="mt-2 w-full gap-2" onClick={() => { onClose(); go("checkout"); }}>
              Checkout <CreditCard className="h-4 w-4" />
            </Button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

// --------------------------------------------------
// Cart Page
// --------------------------------------------------
function CartPage({ go }) {
  const { items, inc, dec, remove, subtotal } = useCart();
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-3xl font-bold tracking-tight">Your Cart</h2>
      {items.length === 0 ? (
        <div className="mt-6">
          <p className="text-muted-foreground">Your cart is empty. Add some products to continue.</p>
          <Button className="mt-4" onClick={() => go("home")}>Back to shopping</Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            {items.map((i) => (
              <Card key={i.id}>
                <CardContent className="flex items-center gap-4 p-4">
                  <img src={i.img} alt={i.name} className="h-24 w-24 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-medium">{i.name}</div>
                        <div className="text-sm text-muted-foreground">{i.priceText}</div>
                      </div>
                      <Button size="icon" variant="ghost" onClick={() => remove(i.id)} aria-label="Remove">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border px-2 py-1">
                      <button onClick={() => dec(i.id)} aria-label="Decrease"><Minus className="h-4 w-4" /></button>
                      <span className="min-w-[2ch] text-center text-sm">{i.qty}</span>
                      <button onClick={() => inc(i.id)} aria-label="Increase"><Plus className="h-4 w-4" /></button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator className="my-4" />
                <Button className="w-full" onClick={() => go("checkout")}>Checkout</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
}

// --------------------------------------------------
// Checkout (playful/flashy)
// --------------------------------------------------
function CheckoutPage({ go }) {
  const { items, subtotal, clear } = useCart();
  const [step, setStep] = useState(1);
  const [shipping, setShipping] = useState({ name: "", email: "", address: "", city: "", postcode: "" });
  const [payment, setPayment] = useState({ card: "", name: "", exp: "", cvc: "" });

  const validShipping = shipping.name && shipping.email && shipping.address && shipping.city && shipping.postcode;
  const validPayment = payment.card && payment.name && payment.exp && payment.cvc;

  const total = subtotal + (subtotal > 0 ? 5 : 0); // flat demo shipping

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Checkout</h2>
        <p className="text-muted-foreground">Playful, colorful, and quick — this is a demo flow.</p>
        <div className="mx-auto mt-4 flex max-w-md items-center justify-between rounded-full border p-2">
          {[
            { n: 1, label: "Shipping" },
            { n: 2, label: "Payment" },
            { n: 3, label: "Review" },
          ].map((s) => (
            <button
              key={s.n}
              onClick={() => setStep(s.n)}
              className={`rounded-full px-4 py-2 text-sm ${step === s.n ? "bg-primary text-primary-foreground" : "opacity-70"}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Shipping Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Full name" value={shipping.name} onChange={(e) => setShipping({ ...shipping, name: e.target.value })} />
                <Input placeholder="Email" value={shipping.email} onChange={(e) => setShipping({ ...shipping, email: e.target.value })} />
                <Input placeholder="Address" value={shipping.address} onChange={(e) => setShipping({ ...shipping, address: e.target.value })} />
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="City" value={shipping.city} onChange={(e) => setShipping({ ...shipping, city: e.target.value })} />
                  <Input placeholder="Postcode" value={shipping.postcode} onChange={(e) => setShipping({ ...shipping, postcode: e.target.value })} />
                </div>
                <Button className="mt-2" onClick={() => setStep(2)} disabled={!validShipping}>Continue to Payment</Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Card number" value={payment.card} onChange={(e) => setPayment({ ...payment, card: e.target.value })} />
                <Input placeholder="Name on card" value={payment.name} onChange={(e) => setPayment({ ...payment, name: e.target.value })} />
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="MM/YY" value={payment.exp} onChange={(e) => setPayment({ ...payment, exp: e.target.value })} />
                  <Input placeholder="CVC" value={payment.cvc} onChange={(e) => setPayment({ ...payment, cvc: e.target.value })} />
                </div>
                <Button className="mt-2" onClick={() => setStep(3)} disabled={!validPayment}>Review Order</Button>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Review & Place Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground">Shipping to {shipping.name}, {shipping.address}, {shipping.city} {shipping.postcode}</div>
                <Separator />
                {items.map((i) => (
                  <div key={i.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={i.img} alt="" className="h-12 w-12 rounded-lg object-cover" />
                      <span>{i.name} × {i.qty}</span>
                    </div>
                    <span>£{(i.price * i.qty).toFixed(2)}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex items-center justify-between text-sm"><span>Subtotal</span><span>£{subtotal.toFixed(2)}</span></div>
                <div className="flex items-center justify-between text-sm"><span>Shipping</span><span>£{subtotal > 0 ? "5.00" : "0.00"}</span></div>
                <div className="flex items-center justify-between text-lg font-bold"><span>Total</span><span>£{total.toFixed(2)}</span></div>
                <Button className="w-full gap-2" onClick={() => { clear(); go("confirm"); }}>
                  Place Order <Sparkles className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              {items.length === 0 && <p className="text-sm text-muted-foreground">No items yet.</p>}
              {items.length > 0 && (
                <div className="space-y-2 text-sm">
                  {items.map((i) => (
                    <div key={i.id} className="flex items-center justify-between">
                      <span className="truncate">{i.name} × {i.qty}</span>
                      <span>£{(i.price * i.qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <Separator className="my-2" />
                  <div className="flex items-center justify-between"><span>Subtotal</span><span>£{subtotal.toFixed(2)}</span></div>
                  <div className="flex items-center justify-between text-muted-foreground"><span>Shipping</span><span>£{subtotal > 0 ? "5.00" : "0.00"}</span></div>
                  <div className="flex items-center justify-between text-base font-bold"><span>Total</span><span>£{(subtotal + (subtotal > 0 ? 5 : 0)).toFixed(2)}</span></div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ConfirmPage({ go }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <Sparkles className="h-8 w-8" />
        </div>
        <h2 className="text-3xl font-extrabold">Order placed 🎉</h2>
        <p className="mt-2 text-muted-foreground">This was a demo checkout. No payment was processed.</p>
        <Button className="mt-6" onClick={() => go("home")}>Back to Home</Button>
      </motion.div>
    </section>
  );
}

// --------------------------------------------------
// Footer & Sections
// --------------------------------------------------
function About() {
  return (
    <section id="about" className="bg-muted/40 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About DemoShop</h2>
        <p className="mt-4 text-muted-foreground">
          Built with React, Tailwind, shadcn/ui, and framer-motion. Swap in your data and ship a gorgeous store fast.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <a href="#home" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" aria-hidden />
          <span className="font-semibold">DemoShop</span>
        </a>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} DemoShop — Demo template for educational use.
        </p>
      </div>
    </footer>
  );
}

// --------------------------------------------------
// App (single-file demo router)
// --------------------------------------------------
export default function EcommerceTemplate() {
  const [route, setRoute] = useState("home");
  const [miniCartOpen, setMiniCartOpen] = useState(false);
  const go = (r) => setRoute(r);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Nav onOpenCart={() => setMiniCartOpen(true)} go={go} />
        <AnimatePresence mode="wait">
          {route === "home" && (
            <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Hero />
              <Separator />
              <Products />
              <About />
            </motion.main>
          )}
          {route === "cart" && (
            <motion.main key="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CartPage go={go} />
            </motion.main>
          )}
          {route === "checkout" && (
            <motion.main key="checkout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CheckoutPage go={go} />
            </motion.main>
          )}
          {route === "confirm" && (
            <motion.main key="confirm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ConfirmPage go={go} />
            </motion.main>
          )}
        </AnimatePresence>
        <MiniCart open={miniCartOpen} onClose={() => setMiniCartOpen(false)} go={go} />
        <Footer />
      </div>
    </CartProvider>
  );
}
