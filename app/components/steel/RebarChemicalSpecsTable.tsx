import { ASSETS } from '@/assets/assets';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function RebarChemicalSpecsTable() {
  const t = useTranslations("SteelProducts.RebarChemicalSpecs");

  const ns = t('values.notSpecified');

  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 dir-auto">
      <div className="mb-6 flex items-center gap-3">
        {/* Styled Image Icon Container */}
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
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-brand-navy-primary text-white text-xs font-semibold tracking-wide">
                <th className="py-3.5 px-3 border-b border-white/15">{t('headers.standard')}</th>
                <th className="py-3.5 px-3 border-b border-white/15">{t('headers.grade')}</th>
                <th className="py-3.5 px-3 border-b border-white/15">{t('headers.carbon')}</th>
                <th className="py-3.5 px-3 border-b border-white/15">{t('headers.silicon')}</th>
                <th className="py-3.5 px-3 border-b border-white/15">{t('headers.manganese')}</th>
                <th className="py-3.5 px-3 border-b border-white/15">{t('headers.sulfur')}</th>
                <th className="py-3.5 px-3 border-b border-white/15">{t('headers.phosphorus')}</th>
                <th className="py-3.5 px-3 border-b border-white/15">{t('headers.nitrogen')}</th>
                <th className="py-3.5 px-3 border-b border-white/15">{t('headers.copper')}</th>
                <th className="py-3.5 px-3 border-b border-white/15">{t('headers.carbonEquivalent')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-medium text-slate-800">
              
              {/* ASTM A615 - Grade 60 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td rowSpan={2} className="py-4 px-3 font-semibold text-slate-900 bg-slate-50/50 border-r border-gray-100 align-middle">
                  {t('values.astmA615')}
                </td>
                <td className="py-3.5 px-3 font-mono font-bold">60</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-3.5 px-3 font-mono text-brand-red-secondary font-bold">0.06</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono">{ns}</td>
              </tr>

              {/* ASTM A615 - Grade 75 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-3 font-mono font-bold border-t border-gray-100">75</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono border-t border-gray-100">{ns}</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono border-t border-gray-100">{ns}</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono border-t border-gray-100">{ns}</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono border-t border-gray-100">{ns}</td>
                <td className="py-3.5 px-3 font-mono text-brand-red-secondary font-bold border-t border-gray-100">0.06</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono border-t border-gray-100">{ns}</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono border-t border-gray-100">{ns}</td>
                <td className="py-3.5 px-3 text-gray-400 font-mono border-t border-gray-100">{ns}</td>
              </tr>

              {/* BS 4449 : 1997 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-3 font-semibold text-slate-900 bg-slate-50/50 border-r border-gray-100">
                  {t('values.bs4449_1997')}
                </td>
                <td className="py-4 px-3 font-mono font-bold">460B</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">0.25</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 font-mono">0.05</td>
                <td className="py-4 px-3 font-mono">0.05</td>
                <td className="py-4 px-3 font-mono">0.012</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">0.51</td>
              </tr>

              {/* BS 4449 : 2005 */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-3 font-semibold text-slate-900 bg-slate-50/50 border-r border-gray-100">
                  {t('values.bs4449_2005')}
                </td>
                <td className="py-4 px-3 font-mono font-bold">B500B</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">0.22</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 font-mono">0.05</td>
                <td className="py-4 px-3 font-mono">0.05</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 font-mono">0.80</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">0.50</td>
              </tr>

              {/* GSO ISO 6935-2:2007 (B 400 B-R / B 500 B-WR) */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-3 font-semibold text-slate-900 bg-slate-50/50 border-r border-gray-100">
                  {t('values.gccIso6935')}
                </td>
                <td className="py-4 px-3 font-mono font-bold">
                  <div>B 400 B-R /</div>
                  <div>B 500 B-WR</div>
                </td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 font-mono">0.06</td>
                <td className="py-4 px-3 font-mono">0.06</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
              </tr>

              {/* GSO ISO 6935-2:2007 (B 400 B-WR / B 500 B-WR) */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-3 font-semibold text-slate-900 bg-slate-50/50 border-r border-gray-100">
                  {t('values.gccIso6935')}
                </td>
                <td className="py-4 px-3 font-mono font-bold">
                  <div>B 400 B-WR /</div>
                  <div>B 500 B-WR</div>
                </td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">0.22</td>
                <td className="py-4 px-3 font-mono">0.60</td>
                <td className="py-4 px-3 font-mono">1.60</td>
                <td className="py-4 px-3 font-mono">0.05</td>
                <td className="py-4 px-3 font-mono">0.05</td>
                <td className="py-4 px-3 font-mono">0.012</td>
                <td className="py-4 px-3 text-gray-400 font-mono">{ns}</td>
                <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">0.50</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}