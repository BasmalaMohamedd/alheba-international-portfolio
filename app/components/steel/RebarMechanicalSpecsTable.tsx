import { ASSETS } from '@/assets/assets';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function RebarMechanicalSpecsTable() {
  const t = useTranslations("SteelProducts.RebarMechanicalSpecs");

  const na = t('values.notApplicable');

  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 dir-auto">
      <div className="mb-4">
              
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-2 flex items-center gap-3">
                        <Image 
                        src={ASSETS.rebarImg}
                        alt={"rebar steel image"}
                        className='w-20 h-20 rounded-2xl'
                        />
                        {t('title')}
                      </h3>
                    </div>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-brand-navy-primary text-white text-xs font-semibold tracking-wide">
                <th className="py-3.5 px-3 border-b border-white/10">{t('headers.standard')}</th>
                <th className="py-3.5 px-3 border-b border-white/10">{t('headers.grade')}</th>
                <th className="py-3.5 px-3 border-b border-white/10">{t('headers.nominalDiameter')}</th>
                <th className="py-3.5 px-3 border-b border-white/10">{t('headers.yieldStrength')}</th>
                <th className="py-3.5 px-3 border-b border-white/10">{t('headers.tensileStrength')}</th>
                <th className="py-3.5 px-3 border-b border-white/10">{t('headers.tensileYieldRatio')}</th>
                <th className="py-3.5 px-3 border-b border-white/10">{t('headers.elongation200mm')}</th>
                <th className="py-3.5 px-3 border-b border-white/10">{t('headers.elongationFracture')}</th>
                <th className="py-3.5 px-3 border-b border-white/10">{t('headers.maxUniformElongation')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-medium text-slate-800">
              
              {/* ASTM A615 - Grade 40 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td rowSpan={7} className="py-4 px-3 font-semibold text-slate-900 bg-slate-50/50 border-r border-gray-100 align-middle">
                  {t('values.astmA615')}
                </td>
                <td rowSpan={2} className="py-3 px-3 font-mono font-bold align-middle">40</td>
                <td className="py-2.5 px-3 font-mono">10</td>
                <td rowSpan={2} className="py-3 px-3 font-mono text-brand-red-secondary font-bold align-middle">280</td>
                <td rowSpan={2} className="py-3 px-3 font-mono text-brand-red-secondary font-bold align-middle">420</td>
                <td rowSpan={2} className="py-3 px-3 text-gray-500 align-middle">{na}</td>
                <td className="py-2.5 px-3 font-mono">11</td>
                <td rowSpan={2} className="py-3 px-3 text-gray-500 align-middle">{na}</td>
                <td rowSpan={2} className="py-3 px-3 text-gray-500 align-middle">{na}</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">14 - 18</td>
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">12</td>
              </tr>

              {/* ASTM A615 - Grade 60 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td rowSpan={3} className="py-3 px-3 font-mono font-bold align-middle border-t border-gray-100">60</td>
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">10 - 19</td>
                <td rowSpan={3} className="py-3 px-3 font-mono text-brand-red-secondary font-bold align-middle border-t border-gray-100">420</td>
                <td rowSpan={3} className="py-3 px-3 font-mono text-brand-red-secondary font-bold align-middle border-t border-gray-100">620</td>
                <td rowSpan={3} className="py-3 px-3 text-gray-500 align-middle border-t border-gray-100">{na}</td>
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">9</td>
                <td rowSpan={3} className="py-3 px-3 text-gray-500 align-middle border-t border-gray-100">{na}</td>
                <td rowSpan={3} className="py-3 px-3 text-gray-500 align-middle border-t border-gray-100">{na}</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">20 - 25</td>
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">8</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">{t('values.greaterThan25')}</td>
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">7</td>
              </tr>

              {/* ASTM A615 - Grade 75 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td rowSpan={2} className="py-3 px-3 font-mono font-bold align-middle border-t border-gray-100">75</td>
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">10 - 25</td>
                <td rowSpan={2} className="py-3 px-3 font-mono text-brand-red-secondary font-bold align-middle border-t border-gray-100">520</td>
                <td rowSpan={2} className="py-3 px-3 font-mono text-brand-red-secondary font-bold align-middle border-t border-gray-100">690</td>
                <td rowSpan={2} className="py-3 px-3 text-gray-500 align-middle border-t border-gray-100">{na}</td>
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">7</td>
                <td rowSpan={2} className="py-3 px-3 text-gray-500 align-middle border-t border-gray-100">{na}</td>
                <td rowSpan={2} className="py-3 px-3 text-gray-500 align-middle border-t border-gray-100">{na}</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">{t('values.greaterThan25')}</td>
                <td className="py-2.5 px-3 font-mono border-t border-gray-100">6</td>
              </tr>

              {/* BS 4449 : 1997 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-3 font-semibold text-slate-900 bg-slate-50/50 border-r border-gray-100">
                  {t('values.bs4449_1997')}
                </td>
                <td className="py-4 px-3 font-mono font-bold">460B</td>
                <td className="py-4 px-3 font-mono">10 - 40</td>
                <td className="py-4 px-3 text-gray-500">{na}</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">460</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">1.08</td>
                <td className="py-4 px-3 text-gray-500">{na}</td>
                <td className="py-4 px-3 font-mono">14</td>
                <td className="py-4 px-3 font-mono">5</td>
              </tr>

              {/* BS 4449 : 2005 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-3 font-semibold text-slate-900 bg-slate-50/50 border-r border-gray-100">
                  {t('values.bs4449_2005')}
                </td>
                <td className="py-4 px-3 font-mono font-bold">B500B</td>
                <td className="py-4 px-3 font-mono">10 - 32</td>
                <td className="py-4 px-3 text-gray-500">{na}</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">500</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">1.08</td>
                <td className="py-4 px-3 text-gray-500">{na}</td>
                <td className="py-4 px-3 text-gray-500">{na}</td>
                <td className="py-4 px-3 font-mono">5</td>
              </tr>

              {/* GSO ISO 6935-2:2007 (B 400 B-R / B 400 B-WR) */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td rowSpan={2} className="py-4 px-3 font-semibold text-slate-900 bg-slate-50/50 border-r border-gray-100 align-middle">
                  {t('values.gccIso6935')}
                </td>
                <td className="py-4 px-3 font-mono font-bold">
                  <div>B 400 B-R</div>
                  <div>B 400 B-WR</div>
                </td>
                <td className="py-4 px-3 font-mono">10 - 40</td>
                <td className="py-4 px-3 text-gray-500">{na}</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">400</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">1.08</td>
                <td className="py-4 px-3 text-gray-500">{na}</td>
                <td className="py-4 px-3 font-mono">14</td>
                <td className="py-4 px-3 font-mono">5</td>
              </tr>

              {/* GSO ISO 6935-2:2007 (B 500 B-R / B 500 B-WR) */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-3 font-mono font-bold border-t border-gray-100">
                  <div>B 500 B-R</div>
                  <div>B 500 B-WR</div>
                </td>
                <td className="py-4 px-3 font-mono border-t border-gray-100">10 - 32</td>
                <td className="py-4 px-3 text-gray-500 border-t border-gray-100">{na}</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold border-t border-gray-100">500</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold border-t border-gray-100">1.08</td>
                <td className="py-4 px-3 text-gray-500 border-t border-gray-100">{na}</td>
                <td className="py-4 px-3 text-gray-500 border-t border-gray-100">{na}</td>
                <td className="py-4 px-3 font-mono border-t border-gray-100">5</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}