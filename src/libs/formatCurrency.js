const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
});

export default function formatCurrency(num) {
  return CURRENCY_FORMATTER.format(num);
}
