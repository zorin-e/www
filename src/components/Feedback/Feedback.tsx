import { Metadata } from "@domain/metadata";
import { ActionLink } from "@components/ActionLink";
import { VisuallyHidden } from "@components/VisuallyHidden";
import { createActionList } from "./createActionList";
import styles from "./Feedback.module.css";

type FeedbackProps = {
  metadata: Metadata;
};

export const Feedback = ({ metadata }: FeedbackProps) => {
  const actions = createActionList(metadata);

  return (
    <article className={styles.feedback}>
      <VisuallyHidden as="h2">Если понравился пост</VisuallyHidden>
      <ul>
        {actions.map(({ label, url }) => (
          <li key={label}>
            <ActionLink href={url}>{label}</ActionLink>
          </li>
        ))}
      </ul>
    </article>
  );
};
