import { pricing } from "@/content";

export default function ExpectationSetting() {
    return (
        <div className="mx-auto max-w-3xl rounded-3xl bg-white/10 p-10 text-center ring-1 ring-white/25">
            <h2 className="text-2xl text-white md:text-3xl">
                {pricing.heading}
            </h2>

            {pricing.body.map((paragraph, index) => (
                <p key={index} className={`${index === 0 ? "mt-4" : "mt-3"} text-base leading-relaxed text-white/70`}>
                    {paragraph}
                </p>
            ))}

            <div className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                    <thead>
                    <tr className="border-b border-white/10 text-white/80">
                        {pricing.tableHeaders.map((header, index) => (
                            <th key={header} className={`py-3 ${index < pricing.tableHeaders.length - 1 ? "pr-4" : ""} font-medium`}>
                                {header}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="text-white/70">
                    {pricing.tableRows.map((row, index) => (
                        <tr key={index} className={index < pricing.tableRows.length - 1 ? "border-b border-white/10" : ""}>
                            <td className="py-3 pr-4">{row.item}</td>
                            <td className="py-3 pr-4">{row.repair}</td>
                            <td className="py-3 pr-4">{row.size}</td>
                            <td className="py-3">{row.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <p className="mt-6 text-sm text-white/50">
                {pricing.footnote}
            </p>
        </div>
    );
}
