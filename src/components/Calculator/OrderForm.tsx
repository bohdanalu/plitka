import React, { useState } from "react";
import Button from "../ui/Button";

interface OrderFormProps {
  open: boolean;
  onClose: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", comment: "" });
      onClose();
    }, 2000);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      style={{ background: open ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)" }}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl shadow-2xl p-6 w-full max-w-md border border-accent/20 transition-all duration-300 ${open ? "scale-100" : "scale-95"}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-2xl text-accent hover:text-dark focus:outline-none"
          onClick={onClose}
          aria-label="Закрити"
        >
          ×
        </button>
        <h3 className="text-xl font-bold mb-4 text-center">Залишити заявку</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-semibold text-dark">Ім'я</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleFormChange}
              required
              className="border border-muted rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Ваше ім'я"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-dark">Телефон</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleFormChange}
              required
              className="border border-muted rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Ваш телефон"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-dark">Коментар</label>
            <textarea
              name="comment"
              value={form.comment}
              onChange={handleFormChange}
              rows={2}
              className="border border-muted rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Додатково (необов'язково)"
            />
          </div>
          <Button
            type="submit"
           
            disabled={submitted}
          >
            {submitted ? "Відправлено!" : "Відправити"}
          </Button>
          {submitted && (
            <div className="text-green-600 text-center font-semibold mt-2">Дякуємо за заявку!</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OrderForm; 