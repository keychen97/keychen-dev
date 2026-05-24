import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import TechTag from './TechTag';

export default function ProjectCard({
  p,
  compact = false,
}: {
  p: Project;
  compact?: boolean;
}) {
  const flatTags = p.stack.flatMap((g) => g.items);
  return (
    <Link
      to={`/projects/${p.id}`}
      className="group block border-l-[3px] border-accent bg-white pl-5 pr-5 py-5 border-y border-r border-rule hover:bg-chip transition-colors"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-serif text-[20px] font-medium text-ink group-hover:text-accent transition-colors">
              {p.name}
            </h3>
            <span className="font-mono whitespace-nowrap text-[11px] px-1.5 py-[1px] rounded-[2px] border border-rule bg-chip text-muted">
              {p.status}
            </span>
          </div>
          <p className="mt-2 text-[14px] text-ink/85 leading-relaxed max-w-[62ch]">
            {p.tagline}
          </p>
          {!compact && (
            <div className="mt-3 flex items-center gap-x-5 gap-y-1 flex-wrap font-mono text-[11.5px] text-muted">
              <span className="whitespace-nowrap">
                <span className="text-ink/60">team</span>{' '}
                <span className="text-ink">{p.team}</span>
              </span>
              <span className="whitespace-nowrap">
                <span className="text-ink/60">role</span>{' '}
                <span className="text-ink">{p.role}</span>
              </span>
              <span className="whitespace-nowrap">
                <span className="text-ink/60">timeline</span>{' '}
                <span className="text-ink">{p.timeline}</span>
              </span>
              <span className="whitespace-nowrap">
                <span className="text-ink/60">url</span>{' '}
                <span className="text-accent">{p.url}</span>
              </span>
            </div>
          )}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {flatTags.slice(0, 7).map((t) => (
              <TechTag key={t} size="sm">
                {t}
              </TechTag>
            ))}
            {flatTags.length > 7 && (
              <span className="font-mono text-[11px] text-muted self-center">
                +{flatTags.length - 7}
              </span>
            )}
          </div>
        </div>
        <div className="hidden md:block shrink-0 self-stretch">
          {p.thumbnail ? (
            <img
              src={p.thumbnail}
              alt={p.name}
              className="w-32 h-full min-h-[100px] object-contain border border-rule rounded-[2px] bg-chip p-2"
            />
          ) : (
            <div className="w-32 h-full min-h-[100px] stripe-placeholder border border-rule rounded-[2px] flex items-center justify-center">
              <span className="font-mono text-[10px] text-muted/80 -rotate-90 tracking-widest uppercase">
                thumbnail
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
