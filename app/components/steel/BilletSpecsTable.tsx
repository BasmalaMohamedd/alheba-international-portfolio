import { ASSETS } from '@/assets/assets';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function BilletSpecsTable() {
  const t = useTranslations("SteelProducts.BilletSpecs");

  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 dir-auto">
      {/* Header with Icon */}
      <div className="mb-6 flex items-center gap-3">
              {/* Styled Image Icon Container */}
              <div className="mb-4">
                            
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-2 flex items-center gap-3">
                  <Image 
                  src={ASSETS.billetImg}
                  alt={"billet steel image"}
                  className='w-20 h-20 rounded-2xl'
                  />
                  {t('title')}
                  </h3>
              </div>
            </div>

      {/* Table 1: Chemical Composition */}
      <div className="mb-8">
        <h4 className="text-sm font-bold text-slate-700 mb-3 px-1">
          {t('sections.chemical')}
        </h4>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-brand-navy-primary text-white text-xs font-semibold tracking-wide">
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.size')}</th>
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.carbon')}</th>
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.silicon')}</th>
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.manganese')}</th>
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.phosphorus')}</th>
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.sulfur')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-medium text-slate-800">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-3 font-mono font-bold bg-slate-50/50 border-r border-gray-100">130 × 130</td>
                  <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">0.40</td>
                  <td className="py-4 px-3 font-mono">0.40</td>
                  <td className="py-4 px-3 font-mono">1.50</td>
                  <td className="py-4 px-3 font-mono">0.05</td>
                  <td className="py-4 px-3 font-mono">0.05</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-3 font-mono font-bold bg-slate-50/50 border-r border-gray-100">150 × 150</td>
                  <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">0.93</td>
                  <td className="py-4 px-3 font-mono">0.60</td>
                  <td className="py-4 px-3 font-mono">1.50</td>
                  <td className="py-4 px-3 font-mono">0.05</td>
                  <td className="py-4 px-3 font-mono">0.05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Table 2: Dimensions & Tolerances */}
      <div>
        <h4 className="text-sm font-bold text-slate-700 mb-3 px-1">
          {t('sections.dimensional')}
        </h4>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-brand-navy-primary text-white text-xs font-semibold tracking-wide">
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.length')}</th>
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.lengthTolerance')}</th>
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.diagonalTolerance')}</th>
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.squareness')}</th>
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.twist')}</th>
                  <th className="py-3.5 px-3 border-b border-white/15">{t('headers.straightness')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-medium text-slate-800">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-3 font-mono">12 - 14 m</td>
                  <td className="py-4 px-3 font-mono">± 50 mm</td>
                  <td className="py-4 px-3 font-mono">± 3 mm</td>
                  <td className="py-4 px-3 font-mono">4 mm</td>
                  <td className="py-4 px-3 font-mono">10 mm</td>
                  <td className="py-4 px-3 font-mono text-brand-red-secondary font-bold">5 mm / m</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}