interface CourseCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  imageUrl: string; // Tambahkan properti imageUrl
}

export function CourseCard({
  title,
  price,
  description,
  features,
  imageUrl, // Tambahkan properti imageUrl
}: CourseCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <div className="mb-4">
          <span className="text-2xl font-bold">
            Rp. {price.toLocaleString()}
          </span>
        </div>
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-blue-500"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          BELI SEKARANG!
        </button>
      </div>
    </div>
  );
}
