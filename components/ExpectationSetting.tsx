export default function ExpectationSetting() {
    return (
        <div className="mx-auto max-w-3xl rounded-3xl bg-white/10 p-10 text-center ring-1 ring-white/25">
            <h2 className="text-2xl text-white md:text-3xl">
                How assessments and pricing work
            </h2>

            <p className="mt-4 text-base leading-relaxed text-white/70">
                Photos are used to assess whether a repair is possible and to provide an
                estimated price range.
            </p>

            <p className="mt-3 text-base leading-relaxed text-white/70">
                Final pricing is confirmed after the item has been inspected in person.
            </p>

            <div className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                    <thead>
                    <tr className="border-b border-white/10 text-white/80">
                        <th className="py-3 pr-4 font-medium">Item</th>
                        <th className="py-3 pr-4 font-medium">Repair</th>
                        <th className="py-3 pr-4 font-medium">Size / complexity</th>
                        <th className="py-3 font-medium">Indicative price</th>
                    </tr>
                    </thead>
                    <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                        <td className="py-3 pr-4">Jeans</td>
                        <td className="py-3 pr-4">Small hole repair</td>
                        <td className="py-3 pr-4">Up to 2 cm</td>
                        <td className="py-3">250–350 SEK</td>
                    </tr>
                    <tr className="border-b border-white/10">
                        <td className="py-3 pr-4">Wool jumper</td>
                        <td className="py-3 pr-4">Invisible mend</td>
                        <td className="py-3 pr-4">Up to 1 cm</td>
                        <td className="py-3">400–600 SEK</td>
                    </tr>
                    <tr className="border-b border-white/10">
                        <td className="py-3 pr-4">Trousers</td>
                        <td className="py-3 pr-4">Hem shortening</td>
                        <td className="py-3 pr-4">Standard</td>
                        <td className="py-3">300–450 SEK</td>
                    </tr>
                    <tr>
                        <td className="py-3 pr-4">Jacket</td>
                        <td className="py-3 pr-4">Lining repair</td>
                        <td className="py-3 pr-4">Localised area</td>
                        <td className="py-3">500–800 SEK</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <p className="mt-6 text-sm text-white/50">
                Prices are indicative and depend on fabric, construction, and overall condition.
            </p>
        </div>
    );
}
