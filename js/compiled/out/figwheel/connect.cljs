(ns figwheel.connect (:require [figwheel.client] [uxbox.core] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/uxbox.core.on-js-reload (apply js/uxbox.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'uxbox.core/on-js-reload' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

