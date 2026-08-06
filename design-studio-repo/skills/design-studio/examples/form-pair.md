# Example Pair: Checkout Contact Form (web)

---

## BAD

```tsx
<input placeholder="Email" className="border rounded p-2" />           // placeholder-as-label
<input placeholder="Card number - - - -" className="border rounded p-2" />
<button className="bg-white text-white border">Pay now</button>         // invisible CTA
{error && <p className="text-red-300">Invalid!</p>}                     // vague, low contrast
```

---

## GOOD

```tsx
<form noValidate onSubmit={handleSubmit} className="grid gap-5 max-w-md">
  <div className="grid gap-1.5">
    <label htmlFor="email" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
      Email for receipts
    </label>
    <input id="email" name="email" type="email" autoComplete="email" required
           aria-describedby="email-hint email-error"
           className="h-11 rounded-lg border border-zinc-300 bg-white px-3 text-zinc-900
                      focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-emerald-600
                      aria-[invalid=true]:border-red-600 dark:bg-zinc-900 dark:text-zinc-100" />
    <p id="email-hint" className="text-xs text-zinc-500">We only send order updates. No marketing.</p>
    <p id="email-error" role="alert" hidden className="text-xs font-medium text-red-700 dark:text-red-400">
      Enter a valid email, like name@example.com.
    </p>
  </div>
  <button type="submit"
          className="h-12 rounded-full bg-emerald-600 font-medium text-white
                     hover:bg-emerald-700 active:scale-[0.99] disabled:opacity-60
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
    Pay ₨1,850
  </button>
</form>
```

Rules honored: real bound labels, hint before error, error replaces hint via `role=alert` +
aria-describedby, `aria-invalid` styling, autocomplete/keyboard hints, 44px+ targets,
button names the action AND amount (localized currency), visible focus, disabled state present.
Validation: on-blur correctness, on-submit completeness, inputs preserved on error, summary
announced and focused.
