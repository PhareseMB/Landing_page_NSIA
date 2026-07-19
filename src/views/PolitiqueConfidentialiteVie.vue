<template>
  <div class="min-h-screen bg-[#f6f8fc] font-sans flex flex-col">

    <NavVie />

    <!-- Contenu -->
    <main class="flex-1 max-w-3xl w-full mx-auto px-5 py-10 md:px-8">

      <!-- Retour -->
      <button
        @click="goBack"
        class="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:opacity-70 transition-opacity"
        style="color: #1c2445;"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        {{ backLabel }}
      </button>

      <!-- En-tête du document -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 px-7 py-8 mb-6 text-center">
        <div class="inline-block w-12 h-1 rounded-full mb-5" style="background-color:#C89B2C;"></div>
        <h1 class="text-[#1c2445] font-black uppercase tracking-wide mb-2" style="font-size:clamp(1.2rem,2.5vw,1.6rem);">
          Politique de confidentialité
        </h1>
        <p class="text-[#54607a] font-semibold text-sm">NSIA Assurances Gabon &amp; NSIA Vie Assurances Gabon</p>
      </div>

      <!-- Corps -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 px-7 py-8 space-y-8 text-[#1c2445]" style="font-size:clamp(0.88rem,1.3vw,1rem); line-height:1.75;">

        <!-- Intro -->
        <div class="space-y-4 text-[#374151]">
          <p>La protection de vos données personnelles est au centre des préoccupations de NSIA Assurances Gabon et NSIA Vie Assurances Gabon.</p>
          <p>La présente politique de confidentialité présente les grands principes applicables à la collecte, au traitement, à l'utilisation, à la conservation, à la sécurisation et, le cas échéant, au partage de vos données à caractère personnel dans le cadre de nos plateformes digitales et services numériques.</p>
          <p>Elle s'applique notamment à notre site internet, à nos formulaires en ligne, à nos pages de campagnes digitales, à nos interactions sur les réseaux sociaux, ainsi qu'à tout autre canal digital actuel ou futur permettant de collecter des données personnelles dans le cadre de nos activités.</p>
          <p>Nous nous engageons à procéder avec prudence, transparence et responsabilité dans l'utilisation de vos données personnelles, conformément à la réglementation applicable en matière de protection des données personnelles.</p>
        </div>

        <!-- Engagements -->
        <div>
          <h2 class="font-bold text-[#1c2445] mb-3">Nos engagements en matière de protection des données à caractère personnel</h2>
          <ul class="space-y-2 text-[#374151]">
            <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Nous accordons une importance particulière au respect de votre vie privée, de vos choix et de vos droits.</span></li>
            <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Nous veillons à ne collecter que les données nécessaires au regard des finalités poursuivies.</span></li>
            <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Nous mettons en œuvre des mesures techniques et organisationnelles destinées à protéger vos données personnelles contre tout accès, traitement, perte, altération ou divulgation non autorisés.</span></li>
            <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Nous nous engageons à vous adresser des communications commerciales uniquement lorsque cela est autorisé par la réglementation applicable ou lorsque vous y avez consenti.</span></li>
            <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Nous veillons à ce que les personnes et prestataires amenés à traiter vos données pour notre compte soient soumis à des exigences appropriées en matière de confidentialité et de sécurité.</span></li>
            <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Nous nous engageons à vous informer de manière claire et transparente sur la manière dont vos données sont collectées et utilisées.</span></li>
            <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Nous nous interdisons d'utiliser ou de divulguer vos données personnelles sans fondement légitime ou sans vous en informer dans les conditions prévues par la réglementation applicable.</span></li>
          </ul>
        </div>

        <hr class="border-gray-100" />

        <!-- I - Définitions -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">I — Définitions</h2>
          <div class="space-y-3 text-[#374151]">
            <p><strong class="text-[#1c2445]">Destinataire :</strong> Toute personne habilitée à recevoir communication de données personnelles, autre que la personne concernée, le responsable de traitement, le sous-traitant et les personnes qui, en raison de leurs fonctions, sont chargées de traiter ces données.</p>
            <p><strong class="text-[#1c2445]">Donnée à caractère personnel :</strong> Toute information, de quelque nature qu'elle soit et indépendamment de son support, relative à une personne physique identifiée ou identifiable, directement ou indirectement, notamment par référence à un identifiant ou à un ou plusieurs éléments propres à son identité.</p>
            <p><strong class="text-[#1c2445]">Cookie(s) :</strong> Un cookie est une suite d'informations de petite taille pouvant être transmise à votre navigateur par un site ou service digital que vous consultez. Les cookies peuvent notamment permettre de mémoriser des préférences, d'assurer le bon fonctionnement d'un service, de mesurer l'audience ou d'améliorer l'expérience utilisateur.</p>
            <p><strong class="text-[#1c2445]">Personne concernée :</strong> Toute personne physique dont les données font l'objet d'un traitement de données à caractère personnel.</p>
            <p><strong class="text-[#1c2445]">Prospection directe :</strong> Tout envoi de message, quel qu'en soit le support, destiné à promouvoir directement ou indirectement des biens, des services ou l'image d'une personne ou d'une entreprise proposant des biens ou services.</p>
            <p><strong class="text-[#1c2445]">Responsable de traitement :</strong> La personne physique ou morale, publique ou privée, qui seule ou conjointement avec d'autres, détermine les finalités et les moyens du traitement de données à caractère personnel.</p>
            <p><strong class="text-[#1c2445]">Sous-traitant :</strong> Toute personne physique ou morale, publique ou privée, qui traite des données personnelles pour le compte du responsable de traitement.</p>
            <p><strong class="text-[#1c2445]">Traitement de données à caractère personnel :</strong> Toute opération ou ensemble d'opérations effectuées ou non à l'aide de procédés automatisés et appliquées à des données personnelles, telles que la collecte, l'enregistrement, l'organisation, la conservation, l'adaptation, la modification, l'extraction, la consultation, l'utilisation, la communication, la transmission, la diffusion, la limitation, l'effacement ou la destruction.</p>
          </div>
        </section>

        <!-- II - Qui sommes-nous -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">II — Qui sommes-nous ?</h2>
          <div class="space-y-3 text-[#374151]">
            <p>La présente politique s'applique aux traitements de données personnelles réalisés dans le cadre des plateformes digitales et services numériques de NSIA Assurances Gabon et NSIA Vie Assurances Gabon.</p>
            <p>NSIA Assurances Gabon est une société anonyme créée en 2000, régie par le Code des assurances CIMA et certifiée ISO 9001:2015. Son siège est situé à Libreville, au quartier Glass, sis au Boulevard de la République.</p>
            <p>NSIA Vie Assurances Gabon est une société anonyme régie par le Code des assurances CIMA et certifiée ISO 9001:2015. Son siège est situé à Libreville, à l'immeuble Frangipaniers, au Boulevard de la République.</p>
            <p>Dans le cadre de la présente politique, les termes « NSIA », « nous », « nos » ou « notre » désignent, selon le contexte, NSIA Assurances Gabon et/ou NSIA Vie Assurances Gabon.</p>
          </div>
        </section>

        <!-- III - Données traitées -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">III — Quelles sont les données personnelles que nous traitons ?</h2>
          <div class="space-y-3 text-[#374151]">
            <p>Dans le cadre de nos activités et de l'utilisation de nos plateformes digitales, nous pouvons être amenés à collecter et traiter différents types de données personnelles vous concernant, notamment :</p>
            <ul class="space-y-1.5">
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Données d'identification ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Données de contact ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Données relatives à vos demandes, besoins, préférences ou centres d'intérêt en lien avec nos produits et services ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Données relatives à la relation commerciale, contractuelle ou précontractuelle ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Données nécessaires à la gestion des demandes, devis, souscriptions, renouvellements ou opérations de service client ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Données de connexion, de navigation, d'audience ou d'utilisation de nos plateformes digitales ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Données issues des échanges que vous entretenez avec nous via nos canaux digitaux ou tout autre moyen de communication.</span></li>
            </ul>
            <p>Nous ne cherchons pas à collecter des données sensibles via nos plateformes digitales. Toutefois, si de telles données devaient être traitées dans un cadre spécifique, elles le seraient avec le plus grand soin, dans le respect de la réglementation applicable et, lorsque cela est requis, sur la base de votre consentement explicite.</p>
          </div>
        </section>

        <!-- IV - Collecte -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">IV — Comment la collecte de vos données se fait-elle ?</h2>
          <div class="space-y-4 text-[#374151]">
            <div>
              <h3 class="font-semibold text-[#1c2445] mb-1">Les informations que vous nous communiquez</h3>
              <p>Nous collectons les données personnelles que vous nous transmettez volontairement lorsque vous utilisez nos plateformes digitales, remplissez un formulaire, effectuez une demande, sollicitez un devis, souhaitez être recontacté, interagissez avec nos contenus ou échangez avec nos équipes.</p>
            </div>
            <div>
              <h3 class="font-semibold text-[#1c2445] mb-1">Les informations collectées automatiquement</h3>
              <p>Lorsque vous utilisez nos plateformes digitales, certaines informations peuvent être collectées automatiquement, notamment des données de connexion, de navigation, d'audience ou d'utilisation. Ces données peuvent être collectées au moyen de cookies ou technologies similaires, afin d'assurer le bon fonctionnement de nos services, d'améliorer votre expérience et de mesurer la performance de nos actions digitales.</p>
            </div>
          </div>
        </section>

        <!-- V - Fondements -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">V — Sur quels fondements nous basons-nous pour le traitement de vos données ?</h2>
          <div class="space-y-3 text-[#374151]">
            <p>En fonction des finalités poursuivies, les traitements de vos données personnelles peuvent reposer sur un ou plusieurs fondements légitimes, notamment :</p>
            <ul class="space-y-1.5">
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Votre consentement ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>L'exécution d'un contrat ou de mesures précontractuelles prises à votre demande ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Le respect d'une obligation légale ou réglementaire à laquelle nous sommes soumis ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>La sauvegarde de vos intérêts ou de vos droits et libertés fondamentaux ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>La poursuite d'un intérêt légitime, dans le respect de vos droits et libertés.</span></li>
            </ul>
          </div>
        </section>

        <!-- VI - Finalités -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">VI — À quelles fins traitons-nous vos données à caractère personnel ?</h2>
          <div class="space-y-3 text-[#374151]">
            <p>Nous pouvons collecter et traiter vos données pour des finalités déterminées, explicites et légitimes, notamment :</p>
            <ul class="space-y-1.5">
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>La gestion de nos plateformes digitales et l'amélioration de votre expérience utilisateur ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>La réception, l'analyse et le traitement de vos demandes transmises via nos canaux digitaux ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>La gestion de la relation commerciale, précontractuelle ou contractuelle ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>La fourniture d'informations relatives à nos produits et services ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>La prospection commerciale, lorsque celle-ci est autorisée ou lorsque vous y avez consenti ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>La gestion des devis, souscriptions, renouvellements, réclamations et demandes d'assistance ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>La réalisation d'études statistiques, de mesure d'audience, d'analyse de performance et d'amélioration de nos services ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>Le respect des obligations légales, réglementaires, comptables, fiscales, prudentielles ou assurantielles applicables ;</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span>La prévention de la fraude, la lutte contre le blanchiment de capitaux et le financement du terrorisme, lorsque cela est applicable.</span></li>
            </ul>
          </div>
        </section>

        <!-- VII - Durée -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">VII — Pendant combien de temps conservons-nous vos données collectées ?</h2>
          <div class="space-y-3 text-[#374151]">
            <p>Nous conservons vos données personnelles uniquement pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, sous réserve des durées de conservation imposées ou autorisées par les dispositions légales et réglementaires applicables.</p>
            <p>À l'issue de cette période, vos données sont supprimées, anonymisées ou archivées de manière sécurisée lorsque leur conservation est nécessaire à des fins de preuve, de gestion de la relation contractuelle, de respect d'une obligation légale ou réglementaire, ou de défense de nos droits.</p>
          </div>
        </section>

        <!-- VIII - Partage -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">VIII — Avec qui partageons-nous vos données ?</h2>
          <div class="space-y-3 text-[#374151]">
            <p>En principe, nous ne partageons vos données personnelles qu'avec les personnes autorisées et habilitées à y accéder dans le cadre de leurs fonctions et missions.</p>
            <p>Vos données peuvent être communiquées, lorsque cela est nécessaire, à nos équipes internes, à nos filiales ou entités du Groupe concernées, à nos partenaires, prestataires, sous-traitants, conseils ou autorités compétentes, dans la limite de ce qui est requis pour les finalités poursuivies et conformément à la réglementation applicable.</p>
            <p>Le transfert éventuel de vos données personnelles vers un pays tiers ne peut intervenir que dans le respect des conditions prévues par la réglementation applicable en matière de protection des données personnelles.</p>
          </div>
        </section>

        <!-- IX - Sécurité -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">IX — Que faisons-nous pour sécuriser vos données ?</h2>
          <div class="space-y-3 text-[#374151]">
            <p>Nous prenons la sécurité de vos données personnelles très au sérieux. Nous mettons en place des mesures de sécurité techniques et organisationnelles destinées à protéger vos données contre tout traitement illégal ou non autorisé, toute perte accidentelle, toute détérioration, toute modification, toute altération ou toute divulgation non autorisée.</p>
            <p>Les mesures de sécurité mises en œuvre sont adaptées à la nature des données traitées, aux risques présentés par les traitements et au niveau de sensibilité des informations concernées.</p>
          </div>
        </section>

        <!-- X - Droits -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">X — Quels sont vos droits concernant vos données et comment les exercer ?</h2>
          <div class="space-y-3 text-[#374151]">
            <p>Nous mettons tout en œuvre pour respecter la confidentialité de vos données personnelles et garantir l'exercice de vos droits, dans les conditions prévues par la réglementation applicable.</p>
            <ul class="space-y-2">
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span><strong class="text-[#1c2445]">Droit d'accès :</strong> vous pouvez obtenir des informations concernant le traitement de vos données personnelles ainsi qu'une copie de ces données.</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span><strong class="text-[#1c2445]">Droit de rectification :</strong> vous pouvez demander la correction de données inexactes ou incomplètes vous concernant.</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span><strong class="text-[#1c2445]">Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données personnelles, dans les limites prévues par la réglementation applicable.</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span><strong class="text-[#1c2445]">Droit à la limitation du traitement :</strong> vous pouvez demander la limitation du traitement de vos données personnelles dans certains cas.</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span><strong class="text-[#1c2445]">Droit de retirer votre consentement :</strong> lorsque le traitement repose sur votre consentement, vous pouvez le retirer à tout moment.</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span><strong class="text-[#1c2445]">Droit à la portabilité :</strong> lorsque cela est applicable, vous pouvez demander la communication des données personnelles que vous nous avez fournies dans un format structuré et couramment utilisé.</span></li>
              <li class="flex gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:#C89B2C;"></span><span><strong class="text-[#1c2445]">Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données personnelles pour des raisons tenant à votre situation, notamment lorsque vos données sont utilisées à des fins de prospection commerciale.</span></li>
            </ul>
            <p>Pour exercer vos droits, vous pouvez adresser votre demande à NSIA Assurances Gabon ou NSIA Vie Assurances Gabon, en précisant le droit que vous souhaitez exercer et en joignant, si nécessaire, un justificatif d'identité.</p>
          </div>
        </section>

        <!-- XI - Modifications -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">XI — Que se passera-t-il en cas de modification de cette politique ?</h2>
          <div class="space-y-3 text-[#374151]">
            <p>Nous pouvons être amenés à modifier ou actualiser la présente politique de confidentialité afin de l'adapter à l'évolution de nos activités, de nos plateformes digitales, de nos pratiques internes ou des exigences légales et réglementaires applicables.</p>
            <p>En cas de modification importante, nous pourrons vous en informer par nos canaux de communication habituels, notamment via nos plateformes digitales, nos services numériques, une notification ou tout autre moyen approprié.</p>
          </div>
        </section>

        <!-- Cookies -->
        <section>
          <h2 class="font-black uppercase text-[#1c2445] mb-4 pb-2 border-b-2" style="border-color:#C89B2C;">À propos des cookies</h2>
          <div class="space-y-3 text-[#374151]">
            <p>Nous pouvons utiliser des cookies ou technologies similaires afin d'optimiser votre expérience de navigation sur nos plateformes digitales. Ces cookies peuvent notamment permettre de mémoriser vos préférences, d'assurer le bon fonctionnement de nos services, de mesurer l'audience, d'analyser l'utilisation de nos plateformes et d'améliorer nos contenus et services.</p>
            <p>Vous pouvez, selon les cas, accepter, refuser ou paramétrer l'utilisation des cookies via les outils mis à votre disposition ou via les paramètres de votre navigateur. Le refus de certains cookies peut toutefois limiter l'accès à certaines fonctionnalités de nos plateformes digitales.</p>
            <p>Les données collectées par le biais des cookies sont principalement utilisées pour garantir la sécurité, assurer le bon fonctionnement de nos applications, faciliter le dépannage, améliorer l'expérience utilisateur et réaliser des analyses ou rapports internes.</p>
            <p>Nos plateformes digitales peuvent intégrer des services proposés par des plateformes tierces, notamment des boutons de partage vers les réseaux sociaux, des contenus multimédias hébergés sur des plateformes externes ou d'autres fonctionnalités interactives. Ces services tiers peuvent déposer leurs propres cookies, directement gérés par les plateformes concernées, conformément à leurs propres politiques de confidentialité.</p>
          </div>
        </section>

      </div>

      <!-- Bouton retour bas de page -->
      <div class="mt-8 flex justify-center">
        <button
          @click="goBack"
          class="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl text-white transition-opacity hover:opacity-90"
          style="background: linear-gradient(135deg, #1c2445 0%, #2e3a6e 100%);"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          {{ backLabel }}
        </button>
      </div>
    </main>

    <NavFooter />

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavVie    from '../components/NavVie.vue'
import NavFooter from '../components/NavFooter.vue'

const route  = useRoute()
const router = useRouter()

const backLabels = {
  '/kinda':          'Retour à NSIA Kinda',
  '/offres-non-vie': 'Retour aux Offres NSIA ASSURANCES',
  '/offres-vie':     'Retour aux Offres NSIA VIE',
}

const backLabel = computed(() =>
  backLabels[route.query.from] ?? 'Retour à la page précédente'
)

function goBack() {
  if (route.query.from) router.push(route.query.from)
  else router.back()
}
</script>
